# FIXME: breaks with ble.sh, shows multiple backslashes
_g_sh_aliases=($(alias | sed -n "s/.*\s\(.*\)='_g_sh'/\1/p") _g_sh)
source "$_GS_SHARE/completions.bash"
function _complete_g_sh_init {
	local i
	for i in "${_g_sh_aliases[@]}"; do
		if ! [[ $(uname -s) =~ Darwin* ]]; then
			complete -o filenames -F _complete_g_sh_bash $i
		else
			complete -F _complete_g_sh_bash $i
		fi
	done
}
_complete_g_sh_init
