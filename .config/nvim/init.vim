set nocompatible              " be iMproved, required
filetype off                  " required
set nowrap

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')
" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
" Utility
Plugin 'majutsushi/tagbar'
Plugin 'wesQ3/vim-windowswap'
Plugin 'godlygeek/tabular'
Plugin 'jeetsukumaran/vim-buffergator'
" Track the engine.
Plugin 'https://github.com/SirVer/ultisnips.git'
" Generic Programming Support
Plugin 'Townk/vim-autoclose'
Plugin 'tomtom/tcomment_vim'
Plugin 'janko-m/vim-test'
Plugin 'maksimr/vim-jsbeautify'
Plugin 'vim-syntastic/syntastic'
" PHP Support
Plugin 'phpvim/phpcd.vim'
Plugin 'tobyS/pdv'
"markdown
Plugin 'tpope/vim-markdown'
Plugin 'jtratner/vim-flavored-markdown'

" Theme / Interface
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

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
Plug 'tpope/vim-vividchalk'
Plug 'https://github.com/scrooloose/nerdtree.git'
Plug 'https://github.com/airblade/vim-gitgutter.git'
Plug 'https://github.com/kien/ctrlp.vim.git'
Plug 'https://github.com/ervandew/supertab.git'
Plug 'https://github.com/2072/PHP-Indenting-for-VIm.git'
Plug 'https://github.com/Shougo/vimproc.vim.git'
Plug 'https://github.com/majutsushi/tagbar.git'
Plug 'terryma/vim-multiple-cursors'
Plug 'mileszs/ack.vim'
Plug 'https://github.com/sjl/badwolf.git'
Plug 'dyng/ctrlsf.vim'
if has('nvim')
  Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
else
  Plug 'Shougo/deoplete.nvim'
  Plug 'roxma/nvim-yarp'
  Plug 'roxma/vim-hug-neovim-rpc'
endif
Plug 'joshdick/onedark.vim'
call plug#end()
syntax enable             " Turn on syntax highlighting
"nerdtree
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
"For toogle nerdtree with ctrl + n
map N :NERDTreeToggle<CR>
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
set novisualbell "disabling annoying bell sound
set cursorline
set wrap "wrapping the lines vetically
colorscheme badwolf
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
nmap vs :vsplit<cr>
nmap hs :split<cr>
"Mapping for clearing highlighted search word
map <esc> :noh<cr>
"tagbar
"map <C-m> :TagbarToggle<CR>
"ctrlP plugin
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP ../'
set directory=$HOME/.vim/swp//
"For ignoring scheme background.
hi Normal ctermbg=none 
"For ignoring vsplit bar colour
hi vertsplit ctermbg=black ctermfg=black
"php autocomplete
autocmd  FileType  php setlocal omnifunc=phpcomplete_extended#CompletePHP
"diabling preview window of omnifunc
set completeopt-=preview
highlight Search cterm=underline
"multiple cursors
let g:multi_cursor_next_key='<C-j>'
let g:multi_cursor_prev_key='<C-k>'
let g:multi_cursor_skip_key='<C-i>'
let g:multi_cursor_quit_key='<Esc>'
let &statusline = ' '
" Vim-Airline Configuration
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
let g:airline_theme='hybridline'
let g:hybrid_custom_term_colors = 1
let g:hybrid_reduced_contrast = 1
let g:airline#extensions#tabline#enabled = 1
" Syntastic Configuration
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_ignore_files = ['.zsh_history']
" Markdown Syntax Support
augroup markdown
    au!
    au BufNewFile,BufRead *.md,*.markdown setlocal filetype=ghmarkdown
augroup END
nnoremap  <silent>   <tab>  :if &modifiable && !&readonly && &modified <CR> :write<CR> :endif<CR>:bnext<CR>
nnoremap  <silent> <s-tab>  :if &modifiable && !&readonly && &modified <CR> :write<CR> :endif<CR>:bprevious<CR>
"For coping selected text in vim visual mode to global clipboard
if has('clipboard')
    if has('unnamedplus')  " When possible use + register for copy-paste
        set clipboard=unnamed,unnamedplus
    else         " On mac and Windows, use * register for copy-paste
        set clipboard=unnamed
    endif
endif
"for deocomplete
let g:deoplete#enable_at_startup = 1
"UltiSnips
let g:UltiSnipsExpandTrigger="<C-j>"
let g:UltiSnipsJumpForwardTrigger="<C-n>"
let g:UltiSnipsJumpBackwardTrigger="<C-p>"

" If you want :UltiSnipsEdit to split your window.
let g:UltiSnipsEditSplit="vertical"
