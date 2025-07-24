set _g_sh_aliases _g_sh (alias | sed -n 's|alias \(.*\) _g_sh|\1|p')

for i in $_g_sh_aliases
	complete -c $i -x -n "test (count (commandline -opc)) -lt 2" -a "("$_GS_SCRIPT" --list-aliases)"
	complete -c $i -x -s r -l register -d "Register alias(es)"
	complete -c $i -x -s u -l unregister -d "Unregister alias(es)" -a "("$_GS_SCRIPT" --list-aliases)"
	complete -c $i -x -s p -l push -d "Pushd current directory, then performs g" -n "test (count (commandline -opc)) -lt 3" -a "("$_GS_SCRIPT" --list-aliases)"
	complete -c $i -x -s l -l list -d "List alias(es)"
	complete -c $i -x -s I -l fzf -d "Selection with fzf"
	complete -c $i -x -s x -l expand -d "Expand alias(es)" -a "("$_GS_SCRIPT" --list-aliases)"
	complete -c $i -x -s c -l cleanup -d "Unregisters non existent path aliases"
	complete -c $i -x -s h -l help -d "Show help"
	complete -c $i -x -s V -l version -d "Show version"
end
