set nocompatible              " be iMproved, required
filetype off                  " required
set nowrap

" Plugins for nvim.
source ~/.config/nvim/plug.vim
" Default keybindings.
luafile ~/.config/nvim/keybind.lua

" Configuration values
luafile ~/.config/nvim/defval.lua
luafile ~/.config/nvim/lazy.lua


"For ignoring vsplit bar colour
hi vertsplit ctermbg=black ctermfg=black

"diabling preview window of omnifunc
set completeopt-=preview
highlight Search cterm=underline

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
autocmd BufWritePre *.vim lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.py lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.ino lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.dart lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.php lua vim.lsp.buf.format(nil, 100)
autocmd BufWritePre *.lua lua vim.lsp.buf.format(nil, 100)
