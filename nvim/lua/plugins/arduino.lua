return {
    {
        "stevearc/vim-arduino",
        config = function()
            vim.g["arduino_dir"] = '/usr/share/arduino/'
            vim.cmd "nnoremap <buffer> <leader>am :ArduinoVerify<CR>"
            vim.cmd "nnoremap <buffer> <leader>au :ArduinoUpload<CR>"
            vim.cmd "nnoremap <buffer> <leader>ad :ArduinoUploadAndSerial<CR>"
            vim.cmd "nnoremap <buffer> <leader>ab :ArduinoChooseBoard<CR>"
            vim.cmd "nnoremap <buffer> <leader>ap :ArduinoChooseProgrammer<CR>"
        end,
    },
}
