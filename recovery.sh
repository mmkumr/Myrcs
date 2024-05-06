#!/usr/bin/zsh
cp  ./.zshrc ./.zsh_history ./.i3status.conf ./.commands ./.tmux.conf ./.tmux/ ~/ -r 

cp ./config/* ~/.config/ -r

sudo cp environment /etc/environment
cp g  ~/.local/share/ -r
