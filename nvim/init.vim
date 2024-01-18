set nocompatible              " be iMproved, required
filetype off                  " required
set nowrap

" Plugins for nvim.
source ~/.config/nvim/plug.vim
" Default keybindings.
source ~/.config/nvim/keybind.lua
luafile ~/.config/nvim/cmp.lua
luafile ~/.config/nvim/lutils.lua
luafile ~/.config/nvim/nvim-tree.lua
" Configuration values
luafile ~/.config/nvim/defval.lua

"hi Normal ctermbg=none
"For ignoring vsplit bar colour
hi vertsplit ctermbg=black ctermfg=black

"diabling preview window of omnifunc
set completeopt-=preview
highlight Search cterm=underline

" Vim-Airline Configuration
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
let g:hybrid_custom_term_colors = 1
let g:airline_theme = 'codedark'
let g:hybrid_reduced_contrast = 1
let g:airline#extensions#tabline#enabled = 1

augroup markdown
    au!
    au BufNewFile,BufRead *.md,*.markdown setlocal filetype=ghmarkdown
augroup END
"For coping selected text in vim visual mode to global clipboard
if has('clipboard')
    if has('unnamedplus')  " When possible use + register for copy-paste
        set clipboard=unnamed,unnamedplus
    else         " On mac and Windows, use * register for copy-paste
        set clipboard=unnamed
    endif
endif


" Update binds when sxhkdrc is updated.
autocmd BufWritePost *sxhkdrc !pkill -USR1 sxhkd
" Update binds when init.vim is updated.
autocmd BufWritePost init.vim source %


" auto-format
autocmd BufWritePre *.js lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.py lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.ino lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.dart lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.php lua vim.lsp.buf.format(nil, 100)

lua << EOF
    require("flutter-tools").setup{
        flutter_path = "/opt/flutter/bin/flutter"
    } -- use defaults
EOF
