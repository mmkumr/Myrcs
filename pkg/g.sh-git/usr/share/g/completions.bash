# Completes the _g_sh function with the available commands
_complete_g_sh_commands()
{
	local IFS=$' \t\n'
	COMPREPLY=($(compgen -W "-r --register -u --unregister -p --push -l --list -I --fzf -x --expand -c --cleanup -V --version -h --help" -- "$1"))
}

# Completes the _g_sh function with the available aliases
_complete_g_sh_aliases()
{
	local IFS=$'\n' matches
	_g_sh_resolve_db

	{
	# remove the filenames attribute from the completion method
	compopt +o filenames

	if [[ "${BLE_VERSION}" ]]; then
		COMPREPLY=($(sed -n -E -e 's|(.*) .*|\1|p' "$_GS_DB" | grep -- "^$1" | sort))
		return
	fi
	} 2>/dev/null

	local -a matches=($(grep -- "^$1" "$_GS_DB" 2>/dev/null))
	if [ "${#matches[@]}" -eq 1 ]; then
		COMPREPLY=("${matches[0]// *}")
	else
		COMPREPLY+=("${matches[@]}")
	fi
}

# Bash programmable completion for the _g_sh function
_complete_g_sh_bash()
{
  local cur="${COMP_WORDS["$COMP_CWORD"]}" prev

  if [ "$COMP_CWORD" -eq "1" ]; then
    # if we are on the first argument
    if [[ $cur == -* ]]; then
      # and starts like a command, prompt commands
      _complete_g_sh_commands "$cur"
    else
      # and doesn't start as a command, prompt aliases
      _complete_g_sh_aliases "$cur"
    fi
  elif [ "$COMP_CWORD" -eq "2" ]; then
    # if we are on the second argument
    prev="${COMP_WORDS[1]}"

	case "$prev" in
	(-u | --unregister | -x | --expand | -p | --push)
		_complete_g_sh_aliases "$cur"
	esac
  elif [ "$COMP_CWORD" -eq "3" ]; then
    # if we are on the third argument
    prev="${COMP_WORDS[1]}"

	case "$prev" in
	(-r | --register)
		# prompt with directories only if user tries to register an alias
		local IFS=$' \t\n'
		COMPREPLY=($(compgen -d -- "$cur"))
	esac
  fi
}
