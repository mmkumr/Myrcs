#Copying rc file to git directory.
#!/usr/bin/zsh
cp  ~/.i3/ \
    ~/.i3status.conf \
    ~/.commitrc.sh \
    ~/.zshrc \
    ~/.config
    /run/media/mmkumr/MyWorkspace/Myrcs/ -r

#Changing to git directory.
cd /run/media/mmkumr/MyWorkspace/Myrcs
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

