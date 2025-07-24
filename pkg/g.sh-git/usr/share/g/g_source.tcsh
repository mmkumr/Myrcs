if (! $?_GS_SCRIPT) set _GS_SCRIPT = "/usr/bin/g.sh"
if (! $?_GS_SHARE) set _GS_SHARE = "/usr/share/g"
if (! $?_GS_CMD) set _GS_CMD = 'g'

alias $_GS_CMD \
'set _gs_args = (\!:*) \
unset _gs_arg_mode _gs_arg_pushd _gs_dest \
if ( "${#_gs_args}" == 0 ) then \
	"$_GS_SCRIPT" -l \
else \
	while ($#_gs_args > 0) \
		switch ("$_gs_args[1]") \
		case "-r": \
			set _gs_arg_mode = "r" \
			breaksw \
		case "--register": \
			set _gs_arg_mode = "r" \
			breaksw \
		case "-u": \
			set _gs_arg_mode = "u" \
			breaksw \
		case "--unregister": \
			set _gs_arg_mode = "u" \
			breaksw \
		case "-l": \
			set _gs_arg_mode = "l" \
			breaksw \
		case "--list": \
			set _gs_arg_mode = "l" \
			breaksw \
		case "-x": \
			set _gs_arg_mode = "x" \
			breaksw \
		case "--expand": \
			set _gs_arg_mode = "x" \
			breaksw \
		case "-c": \
			set _gs_arg_mode = "c" \
			breaksw \
		case "--cleanup": \
			set _gs_arg_mode = "c" \
			breaksw \
		case "-I": \
			set _gs_arg_mode = "I" \
			breaksw \
		case "--fzf": \
			set _gs_arg_mode = "I" \
			breaksw \
		case "-p": \
			set _gs_arg_pushd = "p" \
			breaksw \
		case "--push": \
			set _gs_arg_pushd = "p" \
			breaksw \
		case "-h": \
			set _gs_arg_mode = "h" \
			breaksw \
		case "--help": \
			set _gs_arg_mode = "h" \
			breaksw \
		case "-V": \
			set _gs_arg_mode = "V" \
			breaksw \
		case "--version": \
			set _gs_arg_mode = "V" \
			breaksw \
		default: \
			break \
		endsw \
		set _gs_args = (${_gs_args[2*]}) \
	end \
	if (! $?_gs_arg_mode) set _gs_arg_mode = "" \
	switch ("$_gs_arg_mode") \
	case [hV]: \
		"$_GS_SCRIPT" "-$_gs_arg_mode" \
		breaksw \
	case "l": \
		if ( $?_GS_GREP ) then \
			env _GS_GREP="$_GS_GREP" "$_GS_SCRIPT" -l $_gs_args[*] \
		else \
			"$_GS_SCRIPT" -l $_gs_args[*] \
		endif \
		breaksw \
	case [ruxc]: \
		"$_GS_SCRIPT" "-$_gs_arg_mode" $_gs_args[*] \
		breaksw \
	default: \
		if ("$_gs_arg_mode" == "I") then \
			set _gs_dest = `"$_GS_SCRIPT" -I $_gs_args[*]` \
		else \
			set _gs_dest = `"$_GS_SCRIPT" -x $_gs_args[*]` \
		endif \
		if ("$_gs_dest" != "") then \
			if ( -d "$_gs_dest" ) then \
				if ( $?_gs_arg_pushd ) then \
					pushd -- "$_gs_dest" >/dev/null \
				else if ( $?_GS_CD ) then \
					$_GS_CD "$_gs_dest" \
				else \
					cd -- "$_gs_dest" \
				endif \
				if ( $?_GS_ECHO ) pwd \
			else \
				if ( $?_GS_OPENER ) then \
					$_GS_OPENER "$_gs_dest" \
				else if ( $?OPENER ) then \
					$OPENER "$_gs_dest" \
				else \
					xdg-open "$_gs_dest" \
				endif \
			endif \
		endif \
	endsw \
endif'
