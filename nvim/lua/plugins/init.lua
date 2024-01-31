return {
    'RishabhRD/popfix',
    'https://github.com/airblade/vim-gitgutter.git',
    'tomtom/tcomment_vim',
    'jtratner/vim-flavored-markdown',
    {
        'jeetsukumaran/vim-buffergator',
        config = function()
            vim.cmd "nnoremap <tab> :BuffergatorMruCycleNext<CR>"
        end,
    },
    {
        "akinsho/bufferline.nvim",
        dependencies = { "nvim-tree/nvim-web-devicons" },
        opts = {
            options = {
                separator_style = "slant",
            },
        },
    },
    {
        'ggandor/leap.nvim',
        config = function()
            require('leap').add_default_mappings()
        end,
    },
    {
        "nvim-tree/nvim-tree.lua",
        dependencies = { "nvim-tree/nvim-web-devicons" },
        config = function()
            require 'nvim-tree'.setup {}
            vim.cmd "map N :NvimTreeToggle<CR>"
        end,
    },
    {
        'windwp/nvim-autopairs',
        event = "InsertEnter",
        opts = {} -- this is equalent to setup({}) function
    },
    {
        "lukas-reineke/indent-blankline.nvim",
        main = "ibl",
        event = { "BufReadPre", "BufNewFile" },
        config = function()
            require("ibl").setup()
        end,
    },
    {
        "Exafunction/codeium.nvim",
        event = "InsertEnter",
        dependencies = {
            "nvim-lua/plenary.nvim",
            "hrsh7th/nvim-cmp",
        },
        config = function()
            require("codeium").setup({})
        end
    },
    {
        "kylechui/nvim-surround",
        event = { "BufReadPre", "BufNewFile" },
        version = "*", -- Use for stability; omit to use `main` branch for the latest features
        config = true,
    },
    {
        'akinsho/flutter-tools.nvim',
        lazy = false,
        dependencies = {
            'nvim-lua/plenary.nvim',
            'stevearc/dressing.nvim', -- optional for vim.ui.select
            'Neevash/awesome-flutter-snippets'
        },
        config = function()
            require("flutter-tools").setup {
                flutter_path = "/opt/flutter/bin/flutter"
            }
        end,
    }
}
