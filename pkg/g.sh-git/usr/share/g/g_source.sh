: \
	"${_GS_SCRIPT:="/usr/bin/g.sh"}" \
	"${_GS_SHARE:="/usr/share/g"}"

_g_sh_resolve_db()
{
	: "${_GS_DB:="${XDG_DATA_HOME:-"$HOME/.local/share"}/g/db"}"
	_GS_DB_DIRNAME="${_GS_DB%?"${_GS_DB##*/?}"}"
	if [ ! -d "$_GS_DB_DIRNAME" ]; then
		mkdir -- "$_GS_DB_DIRNAME"
	fi
	touch -a "$_GS_DB"
}

_g_sh(){
	[ $# -eq 0 ] && {
		"$_GS_SCRIPT" -l
		return $?
	}

	local arg_mode
	while [ "$1" ]; do
		case "$1" in
			-r|--register) arg_mode="r" ;;
			-u|--unregister) arg_mode="u" ;;
			-l|--list) arg_mode="l" ;;
			-x|--expand) arg_mode="x" ;;
			-c|--cleanup) arg_mode="c" ;;
			-I|--fzf) arg_mode="I" ;;
			-p|--push) arg_pushd="p" ;;
			-h|--help) arg_mode="h" ;;
			-V|--version) arg_mode="V" ;;
			*) break ;;
		esac
		shift
	done

	case "$arg_mode" in
	(h|V)
		"$_GS_SCRIPT" "-$arg_mode" || return $?
	;;
	(l)
		_GS_GREP="$_GS_GREP" "$_GS_SCRIPT" -l "$@" || return $?
	;;
	(r|u|x|c)
		"$_GS_SCRIPT" "-$arg_mode" "$@"  || return $?
	;;
	(*)
		# go to gdest path
		local gdest
		case "$arg_mode" in
		(I)
			gdest=$("$_GS_SCRIPT" -I "$@") || return $?
		;;
		(*)
			gdest=$("$_GS_SCRIPT" -x "$@") || return $?
		esac

		if [ -n "$gdest" ]; then
			if [ -d "$gdest" ]; then
				# Change directory
				if [ -n "$arg_pushd" ]; then
					pushd "$gdest" >/dev/null || return $?
				elif [ -z "$_GS_CD" ]; then
					cd -- "$gdest"  || return $?
				else
					$_GS_CD "$gdest"  || return $?
				fi
				if [ -n "$_GS_ECHO" ]; then pwd; fi
			else
				# Open file
				${_GS_OPENER:-${OPENER:-"xdg-open"}} "$gdest" || return $?
			fi
		fi
	;;
	esac

}

alias ${_GS_CMD:-g}='_g_sh'

if [ -n "$BASH_VERSION" ]; then
	source "$_GS_SHARE/init.bash"
elif [ -n "$ZSH_VERSION" ]; then
	source "$_GS_SHARE/init.zsh"
fi
