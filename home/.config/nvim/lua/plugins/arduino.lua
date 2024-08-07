return {
    {
        "stevearc/vim-arduino",
        event = { "BufReadPre", "BufNewFile" },
        config = function()
            -- vim.g["arduino_dir"] = '/usr/share/arduino/'
            vim.cmd "nnoremap <buffer> <leader>ac :ArduinoVerify<CR>"
            vim.cmd "nnoremap <buffer> <leader>au :ArduinoUpload<CR>"
            vim.cmd "nnoremap <buffer> <leader>ad :ArduinoUploadAndSerial<CR>"
            vim.cmd "nnoremap <buffer> <leader>ab :ArduinoChooseBoard<CR>"
            vim.cmd "nnoremap <buffer> <leader>ap :ArduinoChooseProgrammer<CR>"
        end,
    },
}
