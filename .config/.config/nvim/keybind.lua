-- ignore up down right left keys in insert mode.
vim.cmd "inoremap <Up> <NOP>"
vim.cmd "inoremap <Down> <NOP>"
vim.cmd "inoremap <Right> <NOP>"
vim.cmd "inoremap <Left> <NOP>"
-- ignore up down right left keys in normal mode.
vim.cmd "noremap <Up> <NOP>"
vim.cmd "noremap <Down> <NOP>"
vim.cmd "noremap <Right> <NOP>"
vim.cmd "noremap <Left> <NOP>"
vim.cmd "nnoremap j gj"
vim.cmd "nnoremap k gk"
vim.cmd "vnoremap j gj"
vim.cmd "vnoremap k gk"
-- maping switching windows
vim.cmd "nmap vs :vsplit<cr>"
vim.cmd "nmap hs :split<cr>"
vim.cmd "nmap <tab> :BuffergatorMruCycleNext<CR>"
-- Mapping for clearing highlighted search word
vim.cmd "map <esc> :noh<cr>"
-- arduino vim keybindings
vim.cmd "nnoremap <buffer> <leader>am :ArduinoVerify<CR>"
vim.cmd "nnoremap <buffer> <leader>au :ArduinoUpload<CR>"
vim.cmd "nnoremap <buffer> <leader>ad :ArduinoUploadAndSerial<CR>"
vim.cmd "nnoremap <buffer> <leader>ab :ArduinoChooseBoard<CR>"
vim.cmd "nnoremap <buffer> <leader>ap :ArduinoChooseProgrammer<CR>"
-- vsnip keybinds
vim.cmd "imap <expr> <C-j>   vsnip#available(1)  ? '<Plug>(vsnip-expand)'         : '<C-j>'"
vim.cmd "imap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'"
vim.cmd "smap <expr> <C-l>   vsnip#available(1)  ? '<Plug>(vsnip-expand-or-jump)' : '<C-l>'"
-- auto resizing debug window while flutter development
vim.cmd "map F :split <bar> :wincmd h <bar> :q <bar> :bnext <bar> :resize 22<cr>"
-- LSP config (the mappings used in the default file don't quite work right)
vim.cmd "nnoremap <silent> gd <cmd>lua vim.lsp.buf.definition()<CR>"
vim.cmd "nnoremap <silent> gD <cmd>lua vim.lsp.buf.declaration()<CR>"
vim.cmd "nnoremap <silent> gr <cmd>lua vim.lsp.buf.references()<CR>"
vim.cmd "nnoremap <silent> gi <cmd>lua vim.lsp.buf.implementation()<CR>"
vim.cmd "nnoremap <silent> K <cmd>lua vim.lsp.buf.hover()<CR>"
vim.cmd "nnoremap <silent> <C-k> <cmd>lua vim.lsp.buf.signature_help()<CR>"
vim.cmd "nnoremap <silent> <C-n> <cmd>lua vim.lsp.diagnostic.goto_prev()<CR>"
vim.cmd "nnoremap <silent> <C-p> <cmd>lua vim.lsp.diagnostic.goto_next()<CR>"
-- For toogle nerdtree with ctrl + n
vim.cmd "map N :NvimTreeToggle<CR>" 
vim.cmd "map t :Telescope<CR>"
vim.cmd "map tc :lua require('lsp-fastaction').code_action()<CR>"
vim.cmd "map tf :Telescope flutter<CR>"
