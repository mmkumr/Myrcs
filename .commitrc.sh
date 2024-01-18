#!/usr/bin/zsh
# Copying rc file to git directory.
cd ~/
cp  ~/.commitrc.sh ~/.i3status.conf ~/.i3/ ~/.muttrc ~/.zshrc ~/.zsh_history \
    ~/.config/lf/ ~/.config/mpv/ ~/.config/nvim/ ~/.config/rofi/ ~/.config/sxhkd/ ~/.config/xfce4/ ~/.config/zathura/ ~/.config/alacritty/ \
    /etc/environment \
    ~/Myrcs/ -r 


#Changing to git directory.
cd ~/Myrcs
git status 
git status | grep clean
if [ $? -gt 0 ] 
then
    sleep 2
    git add .
    git commit -m "Auto commit"
    git push
fi
#netstat -natu | grep 'ESTABLISHED'

