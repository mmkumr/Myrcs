#Copying rc file to git directory.
cp ~/.commitrc.sh /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/
cp ~/.zshrc /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/
cp ~/.config/i3/ /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/.config/ -r
cp ~/.config/xfce4/panel /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/.config/xfce4/ -r
cp ~/.config/nvim/ /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/.config/ -r
cp ~/.config/ranger /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/.config/ -r
cp ~/.config/termite /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/.config/ -r
cp ~/.config/sxhkd /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/.config/ -r
#Changing to git directory.
cd /media/mmkumr/MyWorkspace/Code/GitHub/Myrcs/
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

