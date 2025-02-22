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
-- Mapping for clearing highlighted search word
vim.cmd "nnoremap <tab> :BufferLineCycleNext<CR>"
vim.cmd "nnoremap <S-tab> :BufferLineCyclePrev<CR>"
vim.cmd "map <esc> :noh<cr>"
vim.cmd "map T :terminal<CR>"
vim.cmd "nnoremap L :Lazy<CR>"
vim.keymap.set("n", "<c-t>", ":Telescope find_files<CR>")
