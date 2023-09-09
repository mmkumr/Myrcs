#Copying rc file to git directory.
#!/usr/bin/zsh
cp  ~/.i3/ \
    ~/.i3status.conf \
    ~/.commitrc.sh \
    ~/.zshrc \
    ~/.config \
    /run/media/mmkumr/MyWorkspace/Myrcs/ -r

#Changing to git directory.
cd /run/media/mmkumr/MyWorkspace/Myrcs
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

