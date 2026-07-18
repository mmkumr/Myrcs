return {
    {
        "folke/snacks.nvim",
        priority = 1000,
        lazy = false,
        ---@type snacks.Config
        opts = {
            bigfile = { enabled = true },
            dashboard = { enabled = true },
            explorer = { enabled = true },
            indent = { enabled = true },
            input = { enabled = true },
            notifier = {
                enabled = true,
                timeout = 3000,
            },
            picker = { enabled = true },
            quickfile = { enabled = true },
            scope = { enabled = true },
            scroll = { enabled = true },
            statuscolumn = { enabled = true },
            words = { enabled = true },
            styles = {
                notification = {
                    -- wo = { wrap = true } -- Wrap notifications
                }
            }
        },
        keys = {
            -- Top Pickers & Explorer
            {
                "<leader>/",
                function() Snacks.picker.grep() end,
                desc = "Grep"
            },
            {
                "<leader>:",
                function() Snacks.picker.command_history() end,
                desc = "Command History"
            },
            {
                "<leader>n",
                function() Snacks.picker.notifications() end,
                desc = "Notification History"
            },
            {
                "<leader>e",
                function() Snacks.explorer() end,
                desc = "File Explorer"
            },
            -- find
            {
                "<leader>fb",
                function() Snacks.picker.buffers() end,
                desc = "Buffers"
            },
            {
                "<leader>fc",
                function() Snacks.picker.files({ cwd = "~/.config/" }) end,
                desc = "Find Config File"
            },
            {
                "<leader>fp",
                function() Snacks.picker.projects() end,
                desc = "Projects"
            },

            -- search
            {
                '<leader>s"',
                function() Snacks.picker.registers() end,
                desc = "Registers"
            },
            {
                "<leader>sd",
                function() Snacks.picker.diagnostics() end,
                desc = "Diagnostics"
            },
            {
                "<leader>si",
                function() Snacks.picker.icons() end,
                desc = "Icons"
            },
            {
                "<leader>sk",
                function() Snacks.picker.keymaps() end,
                desc = "Keymaps"
            },
            {
                "<leader>sR",
                function() Snacks.picker.resume() end,
                desc = "Resume"
            },
            {
                "<leader>su",
                function() Snacks.picker.undo() end,
                desc = "Undo History"
            },
            -- Code Folding
            {
                "<leader><Tab>",
                "za",
                desc = "Toggle Code Fold",
            },
            {
                "<leader>cm",
                "zM",
                desc = "Collapse All Code Folds",
            },
            {
                "<leader>cr",
                "zR",
                desc = "Expand All Code Folds",
            },
            -- Other
            {
                "<leader>s",
                function() Snacks.scratch() end,
                desc = "Toggle Scratch Buffer"
            },
            {
                "<leader>S",
                function() Snacks.scratch.select() end,
                desc = "Select Scratch Buffer"
            },
            {
                "<leader>n",
                function() Snacks.notifier.show_history() end,
                desc = "Notification History"
            },
            {
                "<leader>t",
                function()
                    Snacks.terminal(nil, {
                        win = {
                            position = "float",
                            border = "rounded", -- Options: "single", "double", "rounded", "solid"
                            width = 0.8,        -- 80% of screen width
                            height = 0.8,       -- 80% of screen height
                            wo = {
                                winhighlight = "Normal:Normal,FloatBorder:FloatBorder",
                            },
                        },
                    })
                end,
                desc = "Notification History"
            },

        },
        init = function()
            vim.api.nvim_create_autocmd("User", {
                pattern = "VeryLazy",
                callback = function()
                    -- Setup some globals for debugging (lazy-loaded)
                    _G.dd = function(...)
                        Snacks.debug.inspect(...)
                    end
                    _G.bt = function()
                        Snacks.debug.backtrace()
                    end

                    -- Override print to use snacks for `:=` command
                    if vim.fn.has("nvim-0.11") == 1 then
                        vim._print = function(_, ...)
                            dd(...)
                        end
                    else
                        vim.print = _G.dd
                    end

                    -- Create some toggle mappings
                    Snacks.toggle.option("spell", { name = "Spelling" }):map("<leader>us")
                    Snacks.toggle.option("wrap", { name = "Wrap" }):map("<leader>uw")
                    Snacks.toggle.option("relativenumber", { name = "Relative Number" }):map("<leader>uL")
                    Snacks.toggle.diagnostics():map("<leader>ud")
                    Snacks.toggle.line_number():map("<leader>ul")
                    Snacks.toggle.option("conceallevel",
                        { off = 0, on = vim.o.conceallevel > 0 and vim.o.conceallevel or 2 }):map("<leader>uc")
                    Snacks.toggle.treesitter():map("<leader>uT")
                    Snacks.toggle.option("background", { off = "light", on = "dark", name = "Dark Background" }):map(
                        "<leader>ub")
                    Snacks.toggle.inlay_hints():map("<leader>uh")
                    Snacks.toggle.indent():map("<leader>ug")
                    Snacks.toggle.dim():map("<leader>uD")
                end,
            })
        end,
    }
}
