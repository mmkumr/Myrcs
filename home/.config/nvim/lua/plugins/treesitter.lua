return {
    {
        "nvim-treesitter/nvim-treesitter",
        event = { "BufReadPre", "BufNewFile" },
        build = ":TSUpdate",
        dependencies = {
            {
                "JoosepAlviste/nvim-ts-context-commentstring",
                opts = {
                    custom_calculation = function(_, language_tree)
                        if vim.bo.filetype == "blade" and language_tree._lang ~= "javascript" and language_tree._lang ~= "php" then
                            return "{{-- %s --}}"
                        end
                    end,
                },
            },
            "nvim-treesitter/nvim-treesitter-textobjects",
        },

        config = function()
            ---@class ParserInfo[]
            local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
            parser_config.blade = {
                install_info = {
                    url = "https://github.com/EmranMR/tree-sitter-blade",
                    files = {
                        "src/parser.c",
                        -- 'src/scanner.cc',
                    },
                    branch = "main",
                    generate_requires_npm = true,
                    requires_generate_from_grammar = true,
                },
                filetype = "blade",
            }
            -- import nvim-treesitter plugin
            local treesitter = require("nvim-treesitter.configs")

            -- configure treesitter
            treesitter.setup({ -- enable syntax highlighting
                highlight = {
                    enable = true,
                },
                -- enable indentation
                indent = { enable = true },
                -- ensure these language parsers are installed
                ensure_installed = {
                    "javascript",
                    "yaml",
                    "html",
                    "css",
                    "markdown",
                    "php",
                    "sxhkdrc",
                    "bash",
                    "lua",
                    "vim",
                    "gitignore",
                    "python",
                    "dart",
                    "arduino",
                    "c"
                },
                incremental_selection = {
                    enable = true,
                    keymaps = {
                        init_selection = "<C-space>",
                        node_incremental = "<C-space>",
                        scope_incremental = false,
                        node_decremental = "<bs>",
                    },
                },
            })
        end,
    },
}
