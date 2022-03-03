set nocompatible              " be iMproved, required
filetype off                  " required
set nowrap
"set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')
"file for storing all vundle plugins
source ~/.config/nvim/vundle.vim
filetype off                 " required
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
"plug installation manager.
call plug#begin('~/.vim/plugged')
Plug 'hrsh7th/vim-vsnip'
Plug 'hrsh7th/vim-vsnip-integ'
Plug 'Neevash/awesome-flutter-snippets'
Plug 'https://github.com/airblade/vim-gitgutter.git'
Plug 'https://github.com/2072/PHP-Indenting-for-VIm.git'
Plug 'joshdick/onedark.vim'
Plug 'stevearc/vim-arduino'
Plug 'neovim/nvim-lspconfig'
Plug 'williamboman/nvim-lsp-installer'
Plug 'hrsh7th/nvim-compe'
Plug 'RishabhRD/popfix'
Plug 'RishabhRD/nvim-lsputils'
Plug 'L3MON4D3/LuaSnip'
Plug 'nvim-lua/plenary.nvim'
Plug 'nvim-telescope/telescope.nvim'
Plug 'marko-cerovac/material.nvim'
Plug 'kyazdani42/nvim-tree.lua'
Plug 'kyazdani42/nvim-web-devicons' " for file icons
Plug 'appelgriebsch/surround.nvim'
"Dart/Flutter
Plug 'dart-lang/dart-vim-plugin'
Plug 'natebosch/vim-lsc'
Plug 'natebosch/vim-lsc-dart'
Plug 'akinsho/flutter-tools.nvim'
Plug 'rafamadriz/neon'
Plug 'windwp/lsp-fastaction.nvim'
Plug 'tomasiser/vim-code-dark'
call plug#end()

luafile ~/.config/nvim/compe.lua
luafile ~/.config/nvim/lsp_utils.lua
luafile ~/.config/nvim/nvim-tree.lua
luafile ~/.config/nvim/code_action_dart.lua
"nerdtree closing if open while closing the file.
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

luafile ~/.config/nvim/keybind.lua
luafile ~/.config/nvim/defval.lua
"ctrlP plugin
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP ../'
set directory=$HOME/.vim/swp//
"For ignoring scheme background.
"hi Normal ctermbg=none
"For ignoring vsplit bar colour
hi vertsplit ctermbg=black ctermfg=black
"php autocomplete
autocmd  FileType  php setlocal omnifunc=phpcomplete_extended#CompletePHP
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
autocmd BufWritePost init.vim source %

" auto-format
autocmd BufWritePre *.js lua vim.lsp.buf.formatting_sync(nil, 100)
autocmd BufWritePre *.py lua vim.lsp.buf.formatting_sync(nil, 100)
autocmd BufWritePre *.ino lua vim.lsp.buf.formatting_sync(nil, 100)

lua require"surround".setup{}

lua << EOF
  require("flutter-tools").setup{
    flutter_path = "/home/mmkumr/flutter/bin/flutter"
  } -- use defaults
EOF
