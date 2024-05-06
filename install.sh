sudo pacman -S pipewire pipewire-alsa pipewire-pulse a52dec faac faad2 flac jasper lame libdca libdv libmad libmpeg2 libtheora libvorbis libxv wavpack x264 xvidcore nautilus lxappearance-gtk3 nautilus gnome-disk-utility slim sxhkd gparted slim-themes alacritty neovim python-pip php mpv zathura yay xfce4-clipman-plugin xfce4-battery-plugin xfce4-datetime-plugin xfce4-dev-tools xfce4-mount-plugin xfce4-notifyd xfce4-netload-plugin xfce4-mount-plugin xfce4-power-manager xfce4-whiskermenu-plugin rofi npm zathura-pdf-poppler ntfs-3g transmission-gtk npm thunderbird xarchiver unzip tar unrar lf bluez bluez-utils bluez-tools --noconfirm
pip install --break-system-dependencies neovim
yay -S i3lock-color onlyoffice-desktopeditors-git wps-office wps-office-fonts simple-scan obs-studio android-studio opera blueman flameshot ttf-nerd-fonts-symbols ttf-font-awesome ttf-ubuntu-nerd rofi-emoji rofi-power-menu arduino-bin --noconfirm
curl -O https://codeberg.org/tplasdio/g.sh/raw/branch/master/packaging/PKGBUILD-git && makepkg -si -p PKGBUILD-git
sudo mkdir /usr/lib/flutter/
sudo wget -qO- https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.19.6-stable.tar.xz | \
    tar -xvzf -C /usr/lib/ \
    sudo chown mmkumr:mmkumr /usr/lib/flutter/ -R \
    flutter upgrade

