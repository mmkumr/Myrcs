**Folders are structured as per GNU stow**
# For adding files.
> stow [name of the parent] --adopt
# Folder Structure
## 🏠 Home folder contains:
* 📁 configs
* 📁 dot files in the home folder.
## 📦 g folder contains:
* 📁 Bookmarks data used by [g.sh package](https://codeberg.org/tplasdio/g.sh/raw/branch/master/packaging/PKGBUILD-git)
## 🖥️ environment folder contains:
* 📁 file that contains all system wide environment variables.
# Restoring configs
git clone git@github.com:mmkumr/Myrcs.git\
cd Myrcs\
sudo chmod +x install.sh
