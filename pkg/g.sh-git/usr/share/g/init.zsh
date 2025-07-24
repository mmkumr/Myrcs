_g_sh_aliases=($(alias | sed -n "s/\(.*\)=_g_sh/\1/p") _g_sh)
source "$_GS_SHARE/completions.zsh"
function _complete_g_sh_init {
	local i
	for i in "${_g_sh_aliases[@]}"; do
		compdef _complete_g_sh_zsh "$i"
	done
}
_complete_g_sh_init
