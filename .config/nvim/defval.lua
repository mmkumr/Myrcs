-- php indentation
vim.g["PHP_default_indenting"] = 4
vim.opt.smarttab = true
vim.opt.tabstop=4
vim.opt.shiftwidth=4
vim.opt.expandtab = true
vim.opt.ruler = true
vim.opt.relativenumber = true
vim.opt.number = true
vim.opt.showmatch = true
vim.opt.autoindent = true
vim.opt.copyindent = true
vim.opt.ignorecase = true
vim.opt.smartcase = true
vim.opt.cursorline = true
vim.opt.wrap = true -- wrapping the lines vetically
vim.cmd("set wildmode=longest:full,full")
vim.cmd("syntax enable") -- Turn on syntax highlighting
vim.cmd("set backspace=indent,eol,start")
vim.cmd("filetype plugin indent on")
vim.cmd[[colorscheme material]]
vim.g.material_style = "oceanic"
require("indent_blankline").setup {
    show_current_context = true,
    show_current_context_start = true,
}
vim.g["arduino_dir"] = '/usr/share/arduino'

