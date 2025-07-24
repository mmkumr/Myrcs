#!/bin/sh
# shellcheck shell=bash
# shellcheck disable=SC2039
# SOURCE: https://codeberg.org/tplasdio/g.sh
# MIT License
#
# Copyright (c) 2018-2020 Lazarus Lazaridis, 2023 tplasdio at codeberg dot com
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

VERSION=1.3.2.r261.38d9175

CCn='
'

: "${_GS_DB="${XDG_DATA_HOME:-"$HOME/.local/share"}/g/db"}"

# Go to the given alias path
# or executes a command based on the arguments.
main()
{
	if [ -z "$1" ]; then
		# display usage and exit when no args
		usage
		return
	fi

	subcommand="$1"
	shift

	case "$subcommand" in
		-c|--cleanup)
			gs_cleanup "$@"
			;;
		-r|--register) # Register aliases
			gs_register_aliases "$@"
			;;
		-u|--unregister) # Unregister aliases
			gs_unregister_aliases "$@"
			;;
		-l|--list)
			gs_list "$@"
			;;
		--list-aliases)
			gs_list_aliases "$@"
			;;
		--list-paths)
			gs_list_paths "$@"
			;;
		-x|--expand) # Expand aliases
			gs_expand_aliases "$@"
			;;
		-I|--fzf)
			gs_fzf "$@"
			;;
		-h|--help)
			usage
			exit
			;;
		-V|--version)
			echo "$VERSION"
			exit
			;;
	esac
	return $?
}

usage()
{
  cat <<\USAGE
Register aliased paths and navigate to them

[;4;1mUsage:[;92m
  g[;36m <alias>
  [92mg[;36m [<option>] <alias> [<path>]

[;4;1mOptions:[;36m
  -r, --register        [mRegister alias(es)
  [;36m-u, --unregister      [mUnregister alias(es)
  [;36m-p, --push            [mPushes current directory onto the stack, then performs g
  [;36m-l, --list            [mLists alias(es)
  [;36m-I, --fzf             [mSelection with fzf
  [;36m-x, --expand          [mExpands alias(es)
  [;36m-c, --cleanup         [mUnregisters non existent path aliases
  [;36m-h, --help            [mShow this help
  [;36m-V, --version         [mShow version

[;4;1mExamples:[;92m
  g [36m-r [mdox ~/Documents               [3;90m# register an alias
  [;92mg [36m-r [mvids=~/Videos pix=~/Pictures  [3;90m# register multiple aliases
  [;92mg [mdox           [3;90m# cd to aliased path
  [;92mg [36m-p [mdox        [3;90m# pushd to aliased directory
  [;92mg [36m-l            [3;90m# list aliased paths
  [;92mg [36m-I            [3;90m# cd with interactive selection using fzf
  [;92mg [36m-x [mdox        [3;90m# echo path of an alias
  [;92mg [36m-u [mdox        [3;90m# unregister alias
  [;92mg [36m-u [mvids pix   [3;90m# unregister multiple aliases[m
USAGE
}

check_db()
{
	if ! [ -s "$_GS_DB" ]; then
		gs_error "Database doesn't exist or is empty"
		return 20
	fi

	if ! [ -r "$_GS_DB" ]; then
		gs_error "Database is not readable"
		return 21
	fi
}

# Expands directory.
# Helpful for ~, ., .. paths
expand_directory()
{
	cd -- "$1" 2>/dev/null && pwd
}

readlinke()
{
	readlink -e "$@" || realpath -e "$@"
} 2>/dev/null

# Lists registered aliases.
gs_list()
{
	check_db || return $?

	# list aligning names of aliases to their maxlength
	awkscript='BEGIN{ ml=0 }
$0~regex{
	L[NR] = $0
	l = length($1)
	if (l>ml) ml = l
}
END {
	for (i=1; i<=length(L); i++) {
		$0 = L[i]
		if (length($0) != 0)
			printf("%" ml "s %s\n", $1, substr($0, index($0,$2)) )
	}
}'

	if ! [ "$*" ]; then
		awk -F ' ' "$awkscript" "$_GS_DB"
	else
		if [ "$_GS_GREP" ]; then
			$_GS_GREP "$*" < "$_GS_DB" | awk -F ' ' "$awkscript"
		else
			awk -F ' ' -v regex="$*" "$awkscript" "$_GS_DB"
		fi
	fi
}

gs_list_aliases()
{
	check_db || return $?
	sed -n -E -e 's|(.*) .*|\1|p' "$_GS_DB" || return $?
}

gs_list_paths()
{
	check_db || return $?
	sed -n -E -e 's|.* (.*)|\1|p' "$_GS_DB" || return $?
}

gs_fzf()
{
	gs_list \
		| fzf --query "$*" \
		| awk '{print substr($0, index($0,$2))}'
}

# Expands registered aliases
gs_expand_aliases()
{
	if [ $# -eq 0 ]; then
		gs_error "usage: g -x|--expand <aliases>"
		return 1
	fi

	for gs_alias in "$@"; do
		gs_alias="$gs_alias" gs_expand_alias
	done
}

# Expands a registered alias.
# Usage: gs_alias="alias" gs_expand_alias
gs_expand_alias()
{
	resolved=$(gs_find_alias "$gs_alias")
	if [ -z "$resolved" ]; then
		gs_error "alias '$gs_alias' does not exist"
		return 2
	fi

	printf -- "%s\n" "$resolved"
}

# Lists duplicate path aliases
gs_duplicates()
{
	sed -E -n -e 's:[^ ]* '"$1"'/?$:&:p' "$_GS_DB" 2>/dev/null
}

# Registers aliases
gs_register_aliases()
{
	case "$#" in
	(0)
		gs_error "usage: g -r|--register <alias>[=]<path> ..."
		return 1
	;;
	(1)
		case "$1" in
		(*=*) ;;
		(*)
			gs_alias="$1" gs_path="$PWD" gs_register_alias
			return $?
		esac
	esac

	while [ $# -gt 0 ]; do

		# Argument parsing for either:
		# gs_register "alias1" "dir1" "alias2" "dir2", or
		# gs_register "alias1"="dir1" "alias2"="dir2"
		case "$1" in
		(*=*)
			gs_alias="${1%%=*}" \
			gs_path="${1#*=}"
			shift
		;;
		(*)
			if [ $# -lt 2 ]; then
				gs_error "No path for alias $1"
				return 1
			fi
			gs_alias="$1" \
			gs_path="$2"
			shift 2
		esac

		gs_alias="$gs_alias" gs_path="$gs_path" gs_register_alias
	done
}


# Registers an alias with a certain path
# Usage: gs_alias="alias" gs_path="path" gs_register_alias
gs_register_alias()
{
	if ! case "$gs_alias" in
		('' | *$CCn*) false
	esac || grep -E -- '(^-|[= [:cntrl:]])' >/dev/null 2>&1 <<-EOF
	$gs_alias
	EOF
	then
		gs_error "invalid alias: '$gs_alias'. Empty, starts with '-', has spaces, line breaks, '=' or control characters"
		return 2
	fi

	resolved=$(gs_find_alias "$gs_alias")
	if [ -n "$resolved" ]; then
		gs_error "alias '$gs_alias' exists"
		return 3
	fi

	if ! resolved_path=$(readlinke "$gs_path"); then
		# Should it not necessarily exist?
		gs_error "failed to register '$gs_alias' to '$gs_path'"
		return 4
	fi

	dups=$(gs_duplicates "$directory/")
	if [ -n "$dups" ]; then
		gs_warning "duplicate alias(es) found:$CCn$dups"
	fi

	# Append entry to file.
	if [ -d "$resolved_path" ]; then
		printf -- "%s %s/\n" "$gs_alias" "$resolved_path" >> "$_GS_DB" || return 5
	else
		printf -- "%s %s\n" "$gs_alias" "$resolved_path" >> "$_GS_DB" || return 5
	fi
	printf -- "Alias '%s' registered successfully.\n" "$gs_alias"

}

# Unregisters aliases
gs_unregister_aliases()
{
	if [ $# -eq 0 ]; then
		gs_error "usage: g -u|--unregister <aliases>"
		return 1
	fi

	for gs_alias in "$@"; do
		gs_alias="$gs_alias" gs_unregister_alias
	done
}

# Unregisters an alias
# Usage: gs_alias="alias" gs_unregister_alias
gs_unregister_alias()
{
	resolved=$(gs_find_alias "$gs_alias")
	if [ -z "$resolved" ]; then
		gs_error "alias '$gs_alias' does not exist"
		return 2
	fi

	# Delete entry from file.
	if sed -i '/^'"$gs_alias"' /d' "$_GS_DB" \
		|| printf -- "%s\n" "$(sed '/^'"$gs_alias"' /d' "$_GS_DB")" > "$_GS_DB"
	then
		printf -- "Alias '%s' unregistered successfully.\n" "$gs_alias"
	else
		gs_error "Alias '%s' couldn't be unregistered." "$gs_alias"
	fi
}

# Unregisters aliases whose paths no longer exist
gs_cleanup()
{
	check_db || return $?

	awkscript=$(cat <<-\EOF
	{
	alias = $1
	dir = substr($0, index($0,$2))
	cmd = sprintf("[ ! -e \"%s\" ] && printf -- '%%s ' \"%s\"", dir, alias)
	print cmd | "sh"
	}
	END { close("sh") }
	EOF
	)

	gs_unregister_aliases $(awk "$awkscript" "$_GS_DB")
}

# Fetches the path of an alias.
gs_find_alias()
{
	sed -n "s/^$1 \\(.*\\)/\\1/p" "$_GS_DB" 2>/dev/null
}

# Displays the given error.
# Used for common error output.
gs_error()
{
	>&2 printf -- "\033[31mg error:\033[m %s\n" "$*"
}

# Displays the given warning.
# Used for common warning output.
gs_warning()
{
	>&2 printf -- "\033[33mg warning:\033[m %s\n" "$*"
}

# Displays entries with aliases starting as the given one.
gs_print_similar()
{
	similar=$(sed -n "/^$1[^ ]* .*/p" "$_GS_DB" 2>/dev/null)
	if [ -n "$similar" ]; then
		{
		echo "Did you mean:"
		column -t <<-EOF
		$similar
		EOF
		} >&2
	fi
}

# Fetches path of an alias, errors if it doesn't exist.
gs_resolve_alias()
{
	resolved=$(gs_find_alias "$1")

	if [ -z "$resolved" ]; then
		gs_error "unregistered alias $1"
		gs_print_similar "$1"
		return 1
	else
		printf -- "%s\n" "${resolved}"
	fi
}

main "$@" || exit $?
