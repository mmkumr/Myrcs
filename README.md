**Folders are structured regarding GNU stow**\
# Folder Structure\
🏠 Home folder contains:\
    - 📁 configs\
    - 📁 dot file in home folder.\
g folder contains:\
    - 📁 Bookmarks data used by [g.sh package](https://codeberg.org/tplasdio/g.sh/raw/branch/master/packaging/PKGBUILD-git)\
# Restoring configs\
git clone git@github.com:mmkumr/Myrcs.git\
cd Myrcs\
stow --adopt home g\
