return {
    {
        "yetone/avante.nvim",
        event = "VeryLazy",
        build = "make",

        opts = {
            provider = "claude",

            providers = {
                claude = {
                    model = "claude-sonnet-4",
                    -- If using Anthropic API:
                    api_key_name = "ANTHROPIC_API_KEY",

                    -- If using Claude Max/Pro OAuth instead of an API key:
                    -- auth_type = "max",
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
