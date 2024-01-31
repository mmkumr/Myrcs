return {
    "nvim-telescope/telescope.nvim",
    dependencies = {
        "nvim-lua/plenary.nvim",
        "nvim-tree/nvim-web-devicons",
        'nvim-telescope/telescope-ui-select.nvim'
    },
    config = function()
        require("telescope").load_extension("ui-select")
        require("telescope").load_extension("flutter")
        vim.cmd "map tf :Telescope flutter<CR>"
    end,
}
