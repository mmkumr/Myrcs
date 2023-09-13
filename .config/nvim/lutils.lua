require("mason").setup()
-- Set up lspconfig.
local capabilities = require('cmp_nvim_lsp').default_capabilities()
-- Replace <YOUR_LSP_SERVER> with each lsp server you've enabled.
require('lspconfig')['html'].setup {
    capabilities = capabilities
}
require('lspconfig')['quick_lint_js'].setup {
    capabilities = capabilities
}
require('lspconfig')['marksman'].setup {
    capabilities = capabilities
}
require('lspconfig')['pylsp'].setup {
    capabilities = capabilities
}
require('lspconfig')['intelephense'].setup {
    capabilities = capabilities
}
require('lspconfig')['grammarly'].setup {
    capabilities = capabilities
}
require('lspconfig')['lua_ls'].setup {
    capabilities = capabilities
}
require('lspconfig')['cssls'].setup {
    capabilities = capabilities
}
require('lspconfig')['cmake'].setup {
    capabilities = capabilities
}
require('lspconfig')['clangd'].setup {
    capabilities = capabilities
}
require('lspconfig')['bashls'].setup {
    capabilities = capabilities
}
require('lspconfig')['arduino_language_server'].setup {
    capabilities = capabilities
}
require('lspconfig')['dartls'].setup {
    capabilities = capabilities
}
require('lspconfig')['vimls'].setup {
    capabilities = capabilities
}
