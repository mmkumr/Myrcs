set nocompatible              " be iMproved, required
filetype off                 " required
"plug installation manager.
call plug#begin('~/.vim/plugged')
Plug 'tpope/vim-vividchalk'
Plug 'https://github.com/scrooloose/nerdtree.git'
Plug 'https://github.com/airblade/vim-gitgutter.git'
Plug 'https://github.com/kien/ctrlp.vim.git'
Plug 'https://github.com/ervandew/supertab.git'
Plug 'https://github.com/2072/PHP-Indenting-for-VIm.git'
Plug 'https://github.com/Shougo/vimproc.vim.git'
Plug 'https://github.com/majutsushi/tagbar.git'
Plug 'terryma/vim-multiple-cursors'
Plug 'https://github.com/chriskempson/tomorrow-theme.git'
Plug 'mileszs/ack.vim'
call plug#end()
syntax enable             " Turn on syntax highlighting
"nerdtree
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
"For toogle nerdtree with ctrl + n
map <C-n> :NERDTreeToggle<CR>
"End nerdtree
"php indentation
let g:PHP_default_indenting = 1
set backspace=indent,eol,start
filetype plugin indent on
set smarttab
set tabstop=4
set shiftwidth=4
set expandtab
syntax on
set ruler
set relativenumber
set number
set showmatch
set autoindent
set wildmode=longest:full,full
set copyindent
set ignorecase
set smartcase
set visualbell
"disabling annoying bell sound
colorscheme Tomorrow-Night-Bright 
"ignore up down right left keys in insert mode.
inoremap <Up> <NOP>
inoremap <Down> <NOP>
inoremap <Right> <NOP>
inoremap <Left> <NOP>
"ignore up down right left keys in normal mode.
noremap <Up> <NOP>
noremap <Down> <NOP>
noremap <Right> <NOP>
noremap <Left> <NOP>
nnoremap j gj
nnoremap k gk
"maping switching windows
map <C-h> <c-w>h
map <C-j> <c-w>j
map <C-k> <c-w>k
map <C-l> <c-w>l
imap jj <esc>
nmap vs :vsplit<cr>
nmap hs :split<cr>
"ctrlP plugin
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP ../'
set directory=$HOME/.vim/swp//
"For ignoring scheme background.
hi Normal ctermbg=none 
"For ignoring vsplit bar colour
hi vertsplit ctermbg=black ctermfg=black
"php autocomplete
au FileType php set omnifunc=phpcomplete#CompletePHP
"diabling preview window of omnifunc
set completeopt-=preview
highlight Search cterm=underline
"multiple cursors
let g:multi_cursor_next_key='<C-l>'
let g:multi_cursor_prev_key='<C-h>'
let g:multi_cursor_skip_key='<C-i>'
let g:multi_cursor_quit_key='<Esc>'
let &statusline = ' '
