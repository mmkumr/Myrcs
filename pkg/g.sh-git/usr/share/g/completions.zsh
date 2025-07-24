# Zsh programmable completion for the _g_sh function
_complete_g_sh_zsh()
{
	_g_sh_resolve_db
	local IFS=$'\n'
	# Completions won't work for aliases wiht ':'
	local all_aliases=($(sed -e 's/ /:/g' "$_GS_DB" | sed -E -e 's|(.*:)('"$HOME"')(.*)|\1~\3|'))

	local state
	local -a options=(
		'(1)'{-r,--register}'[Register alias(es)]:register:->register'
		'(- 1 2)'{-u,--unregister}'[Unregister alias(es)]:unregister:->unregister'
		'(1 2)'{-p,--push}'[Pushd current directory, then performs g]:push:->aliases'
		'(: -)'{-I,--fzf}'[Selection with fzf]'
		'(: -)'{-l,--list}'[List alias(es)]'
		'(1 2)'{-x,--expand}'[Expand alias(es)]:expand:->aliases'
		'(*)'{-c,--cleanup}'[Unregisters non existent path aliases]'
		'(: -)'{-h,--help}'[Show help]'
		'(* -)'{-V,--version}'[Show version]'
	)

  _arguments -C \
    "${options[@]}" \
    '1:alias:->aliases' \
    '2:dir:_files' \
  && ret=0

  case ${state} in
    (aliases)
      _describe -t aliases 'g.sh aliases:' all_aliases && ret=0
    ;;
    (unregister)
      _describe -t aliases 'unregister alias:' all_aliases && ret=0
    ;;
  esac
  return $ret
}
