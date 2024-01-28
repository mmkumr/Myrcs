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
require('lspconfig')['pyright'].setup {
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

local MY_FQBN = "esp32:esp32:esp32doit-devkit-v1"

require('lspconfig')['arduino_language_server'].setup {
    cmd = {
        "arduino-language-server",
        "-cli-config", "~/.arduinoIDE/arduino-cli.yaml",
        "-fqbn", MY_FQBN
    }
}
require('lspconfig')['dartls'].setup {
    capabilities = capabilities
}
require('lspconfig')['vimls'].setup {
    capabilities = capabilities
}
require("telescope").load_extension("ui-select")
require("telescope").load_extension("flutter")