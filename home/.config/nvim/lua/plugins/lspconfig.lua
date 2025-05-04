return {
    "neovim/nvim-lspconfig",
    event = { "BufReadPre", "BufNewFile" },
    dependencies = {
        "hrsh7th/cmp-nvim-lsp",
        'RishabhRD/nvim-lsputils',
        'windwp/lsp-fastaction.nvim',
        'neovim/nvim-lspconfig',
    },
    config = function()
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
        require('lspconfig')['pyright'].setup {
            capabilities = capabilities
        }
        require('lspconfig')['pylsp'].setup {
            capabilities = capabilities,
            settings = {
                -- configure plugins in pylsp
                pylsp = {
                    plugins = {
                        pyflakes = { enabled = false },
                        pylint = { enabled = false },
                        flake8 = { enabled = false }
                    },
                },
            },
        }
        require('lspconfig')['intelephense'].setup {
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

        local ESP_FQBN = "esp32:esp32:esp32doit-devkit-v1"
        local Mega_FQBN = "arduino:avr:mega"
        local Uno_FQBN = "arduino:avr:uno"
        require('lspconfig')['arduino_language_server'].setup {
            capabilities = capabilities,
            cmd = {
                "arduino-language-server",
                "-cli-config", "/home/mmkumr/.arduino15/arduino-cli.yaml",
                "-fqbn",
                Uno_FQBN
            }
        }

        require('lspconfig')['vimls'].setup {
            capabilities = capabilities,
        }


        -- keybindings
        vim.cmd "nnoremap <silent> gd <cmd>lua vim.lsp.buf.definition()<CR>"
        vim.cmd "nnoremap <silent> gD <cmd>lua vim.lsp.buf.declaration()<CR>"
        vim.cmd "nnoremap <silent> gr <cmd>lua vim.lsp.buf.references()<CR>"
        vim.cmd "nnoremap <silent> gi <cmd>lua vim.lsp.buf.implementation()<CR>"
        vim.cmd "nnoremap <silent> K <cmd>lua vim.lsp.buf.hover()<CR>"
        vim.cmd "nnoremap <silent> <C-k> <cmd>lua vim.lsp.buf.signature_help()<CR>"
        vim.cmd "nnoremap <silent> <C-n> <cmd>lua vim.lsp.diagnostic.goto_prev()<CR>"
        vim.cmd "nnoremap <silent> <C-p> <cmd>lua vim.lsp.diagnostic.goto_next()<CR>"
        vim.cmd "nnoremap ca :lua vim.lsp.buf.code_action()<CR>"
        vim.cmd "map R <cmd>lua vim.lsp.buf.rename()<CR>"
    end,
}
