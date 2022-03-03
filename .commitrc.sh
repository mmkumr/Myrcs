#Copying rc file to git directory.
#!/usr/bin/zsh
cp  ~/.commitrc.sh \
    ~/.zshrc \
    $project_dir/Myrcs/

cp  ~/.i3/ \
    ~/.i3status.conf \
    ~/.config/xfce4/ \
    ~/.config/nvim/ \
    ~/.config/ranger \
    ~/.config/alacritty \
    ~/.config/sxhkd \
    $project_dir/Myrcs/.config/ -r
#Changing to git directory.
cd $project_dir/Myrcs
git status 
git status | grep clean
if [ $? -gt 0 ] 
then
    echo -n "Do you want to commit rc files? [Y/n] "
    read REPLY
    if test "$REPLY" = "N" -o "$REPLY" = "n"; then
    echo "Operation canceled"
    sleep 2
    else
        git add .
        git commit -m "Auto commit"
        git push
    fi
fi

#netstat -natu | grep 'ESTABLISHED'

