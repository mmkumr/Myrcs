return {
    "neovim/nvim-lspconfig",
    event = { "BufReadPre", "BufNewFile" },
    dependencies = {
        "hrsh7th/cmp-nvim-lsp",
        'RishabhRD/nvim-lsputils',
        'windwp/lsp-fastaction.nvim',
    },
    config = function()
        local capabilities = require('cmp_nvim_lsp').default_capabilities()
        vim.diagnostic.config({ virtual_text = true })

        -- 1. Apply global capabilities to all language servers natively
        vim.lsp.config('*', {
            capabilities = capabilities
        })

        -- 2. List servers that only need default settings
        local basic_servers = {
            'html', 'quick_lint_js', 'marksman', 'pyright',
            'intelephense', 'lua_ls', 'cssls', 'cmake',
            'bashls', 'jsonls', 'vimls'
        }

        for _, server in ipairs(basic_servers) do
            vim.lsp.enable(server)
        end

        -- 3. Configure and enable servers with unique settings

        -- Pylsp
        vim.lsp.config('pylsp', {
            settings = {
                pylsp = {
                    plugins = {
                        pyflakes = { enabled = false },
                        pylint = { enabled = false },
                        flake8 = { enabled = false }
                    },
                },
            },
        })
        vim.lsp.enable('pylsp')

        -- Clangd
        vim.lsp.config('clangd', {
            cmd = { "clangd", "--compile-commands-dir=." },
            filetypes = { "c", "cpp", "objc", "objcpp" },
        })
        vim.lsp.enable('clangd')

        -- Arduino Language Server
        local ESP_FQBN = "esp32:esp32:esp32doit-devkit-v1"
        local Mega_FQBN = "arduino:avr:mega"
        local Uno_FQBN = "arduino:avr:uno"

        vim.lsp.config('arduino_language_server', {
            cmd = {
                "arduino-language-server",
                "-cli-config", "/home/mmkumr/.arduino15/arduino-cli.yaml",
                "-fqbn",
                Uno_FQBN
            }
        })
        vim.lsp.enable('arduino_language_server')

        -- 4. Keybindings (Updated to modern vim.keymap.set API)
        local opts = { silent = true }
        vim.keymap.set('n', 'gd', vim.lsp.buf.definition, opts)
        vim.keymap.set('n', 'gD', vim.lsp.buf.declaration, opts)
        vim.keymap.set('n', 'gr', vim.lsp.buf.references, opts)
        vim.keymap.set('n', 'gi', vim.lsp.buf.implementation, opts)
        vim.keymap.set('n', 'K', vim.lsp.buf.hover, opts)
        vim.keymap.set('n', '<C-k>', vim.lsp.buf.signature_help, opts)

        -- Diagnostic mappings (Updated for modern nvim API)
        vim.keymap.set('n', '<C-n>', vim.diagnostic.goto_prev, opts)
        vim.keymap.set('n', '<C-p>', vim.diagnostic.goto_next, opts)

        vim.keymap.set('n', 'ca', vim.lsp.buf.code_action, opts)
        vim.keymap.set('n', 'R', vim.lsp.buf.rename, opts)
    end,
}
