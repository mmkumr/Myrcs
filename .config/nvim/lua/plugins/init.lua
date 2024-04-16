return {
    'RishabhRD/popfix',
    'jtratner/vim-flavored-markdown', -- For markdown files
    {
        'numToStr/Comment.nvim',
        event = { "BufReadPre", "BufNewFile" },
        config = function()
            require('Comment').setup()
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
        'akinsho/flutter-tools.nvim',
        event = { "BufReadPre", "BufNewFile" },
        dependencies = {
            'nvim-lua/plenary.nvim',
            'stevearc/dressing.nvim', -- optional for vim.ui.select
            'Neevash/awesome-flutter-snippets'
        },
        config = function()
            require("flutter-tools").setup {
                flutter_path = "/usr/lib/flutter/bin/flutter"
            }
        end,
    },
}
