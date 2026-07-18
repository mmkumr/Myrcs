return {
    {
        "yetone/avante.nvim",
        event = "VeryLazy",
        build = "make",
        opts = {

            provider = "ollama",

            vendors = {

                ollama = {

                    endpoint = "http://127.0.0.1:11434",

                    model = "qwen3:14b",

                    timeout = 30000,

                },

            },

        },


        dependencies = {
            "nvim-lua/plenary.nvim",
            "MunifTanjim/nui.nvim",
            "nvim-tree/nvim-web-devicons",
            "MeanderingProgrammer/render-markdown.nvim",
            "HakonHarnes/img-clip.nvim",
        },
    },
}
