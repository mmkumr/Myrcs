# Installing packages
sudo pacman -S pipewire pipewire-alsa pipewire-pulse a52dec faac faad2 flac jasper lame libdca libdv libmad libmpeg2 libtheora libvorbis libxv wavpack x264 xvidcore nautilus gnome-disk-utility slim sxhkd gparted slim-themes alacritty neovim python-pip php  zathura yay xfce4-clipman-plugin xfce4-battery-plugin xfce4-datetime-plugin xfce4-dev-tools xfce4-mount-plugin xfce4-notifyd xfce4-netload-plugin xfce4-mount-plugin xfce4-power-manager xfce4-whiskermenu-plugin rofi  zathura-pdf-poppler ntfs-3g transmission-gtk npm thunderbird xarchiver unzip tar unrar lf bluez bluez-utils bluez-tools stow libinput-gestures zoxide docker tmux

# Installing AUR packages
yay -S i3lock-color onlyoffice-desktopeditors-git wps-office wps-office-fonts simple-scan obs-studio android-studio opera blueman flameshot ttf-nerd-fonts-symbols ttf-meslo-nerd ttf-font-awesome ttf-ubuntu-nerd rofi-emoji rofi-power-menu rofi-greenclip arduino-bin libtiff5 epson-inkjet-printer-201601w snapd onlyoffice-desktopeditors nomacs warpinator mpv-full
# For avoiding rust to failing.
sudo pacman -S rustup
rustup install stable
rustup default stable
yay -S kanata
#installing snap packages
snap install multipass
# Installing g.sh package
curl -O https://codeberg.org/tplasdio/g.sh/raw/branch/master/packaging/PKGBUILD-git && makepkg -si -p PKGBUILD-git
# Installing neovim dependency
pip install --break-system-packages neovim
# End

# Installing flutter
sudo mkdir /usr/lib/flutter/
sudo wget -qO- https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.19.6-stable.tar.xz | \
    tar -xvzf -C /usr/lib/ \
    sudo chown mmkumr:mmkumr /usr/lib/flutter/ -R \
    flutter upgrade
# End

# Making scripts executable.
sudo chmod +x ~/.i3/scripts/ -R
sudo chmod +x ~/.commands/ -R
# End

# Creating link of config files
stow --adopt home g
sudo stow -t /etc/ --adopt environment
# End

# Katana configuration
systemctl --user daemon-reload
systemctl --user enable kanata.service
systemctl --user start kanata.service
systemctl --user status kanata.service
# Docker config
systemctl enable docker.service
systemctl start docker.service
sudo usermod -aG docker $USER

chsh -s /bin/zsh
# End
