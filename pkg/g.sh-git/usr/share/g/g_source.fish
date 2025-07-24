set -q _GS_SCRIPT || set -g _GS_SCRIPT "/usr/bin/g.sh"
set -q _GS_SHARE || set -g _GS_SHARE "/usr/share/g"

function _g_sh
	if [ (count $argv) -eq 0 ]
		$_GS_SCRIPT -l
		return $status
	end

	set -l arg_mode
	while true
		switch "$argv[1]"
		case -r --register; set arg_mode "r"
		case -u --unregister; set arg_mode "u"
		case -l --list; set arg_mode "l"
		case -x --expand; set arg_mode "x"
		case -c --cleanup; set arg_mode "c"
		case -I --fzf; set arg_mode "I"
		case -p --push; set arg_pushd "p"
		case -h --help; set arg_mode "h"
		case -V --version; set arg_mode "V"
		case '*'; break
		end
		set -e argv[1]
	end

	switch "$arg_mode"
	case h V
		"$_GS_SCRIPT" "-$arg_mode" || return $status
	case l
		_GS_GREP="$_GS_GREP" "$_GS_SCRIPT" -l $argv || return $status
	case r u x c
		"$_GS_SCRIPT" "-$arg_mode" $argv|| return $status
	case '*'
		set -l gdest

		switch "$arg_mode"
		case I
			set gdest ("$_GS_SCRIPT" -I $argv) || return $status
		case '*'
			set gdest ("$_GS_SCRIPT" -x $argv) || return $status
		end

		if [ -n "$gdest" ]
			if [ -d "$gdest" ]
				if [ -n "$arg_pushd" ]
					pushd "$gdest" >/dev/null || return $status
				else if [ -z "$_GS_CD" ]
					cd -- "$gdest"  || return $status
				else
					$_GS_CD "$gdest" || return $status
				end
				if [ -n "$_GS_ECHO" ]; pwd; end
			else
				if [ -n "$_GS_OPENER" ]
					$_GS_OPENER "$gdest" || return $status
				else if [ -n "$OPENER" ]
					$OPENER "$gdest" || return $status
				else
					xdg-open "$gdest" || return $status
				end
			end
		end
	end

end

set -q _GS_CMD && alias "$_GS_CMD"='_g_sh' || alias g='_g_sh'

source "$_GS_SHARE/init.fish"
