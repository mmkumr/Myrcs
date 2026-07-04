# Installing packages
sudo pacman -S pipewire pipewire-alsa pipewire-pulse a52dec faac faad2 flac jasper lame libdca libdv libmad libmpeg2 libtheora libvorbis libxv wavpack x264 xvidcore nautilus gnome-disk-utility slim sxhkd gparted slim-themes alacritty neovim python-pip php  zathura yay xfce4-clipman-plugin xfce4-battery-plugin xfce4-datetime-plugin xfce4-dev-tools xfce4-mount-plugin xfce4-notifyd xfce4-netload-plugin xfce4-mount-plugin xfce4-power-manager xfce4-whiskermenu-plugin xfce4-pulseaudio-plugin rofi  zathura-pdf-poppler ntfs-3g transmission-gtk npm thunderbird xarchiver unzip tar unrar lf bluez bluez-utils bluez-tools stow libinput-tools zoxide docker tmux screen autorandr brightnessctl xss-lock bash fd kitty ripgrep

# installing Mpv separately for avoid ffmpeg plugin
sudo pacman -Syu mpv

# Installing AUR packages
yay -S i3lock-color onlyoffice-desktopeditors-git wps-office wps-office-fonts simple-scan obs-studio opera blueman flameshot ttf-nerd-fonts-symbols ttf-meslo-nerd ttf-font-awesome ttf-ubuntu-nerd rofi-emoji rofi-power-menu rofi-greenclip arduino-bin libtiff5 epson-inkjet-printer-201601w snapd onlyoffice-desktopeditors nomacs warpinator 
sudo chmod +wr /opt/ -R
# For avoiding rust to failing.
sudo pacman -S rustup
sudo rustup install stable
sudo rustup default stable
yay -S kanata
#installing snap packages
sudo snap install multipass
# Installing g.sh package
sudo curl -O https://codeberg.org/tplasdio/g.sh/raw/branch/master/packaging/PKGBUILD-git && makepkg -si -p PKGBUILD-git
# Installing neovim dependency
pip install --break-system-packages neovim
# End

# Installing Android Studio
sudo mkdir -p /opt/android-studio && \
    sudo curl -L https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.2.1.20/android-studio-2023.2.1.20-linux.tar.gz | \
    sudo tar -xz -C /opt/android-studio --strip-components=1 && \
    sudo ln -sf /opt/android-studio/bin/studio.sh /usr/local/bin/android-studio
# End

# Installing flutter
sudo mkdir -p /usr/lib/flutter/ && \
    sudo curl -L https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.32.8-stable.tar.xz | \
    sudo tar -xJ -C /usr/lib/flutter --strip-components=1 && \
    sudo chown -R mmkumr:mmkumr /usr/lib/flutter/ && \
    flutter upgrade && \
    sudo pacman -S jdk17-openjdk && \
    flutter config --jdk-dir=/usr/lib/jvm/java-17-openjdk && \
    flutter config --android-studio-dir=/opt/android-studio && \
    flutter doctor --android-licenses && \
    flutter doctor -v
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
sudo systemctl enable docker.service
sudo systemctl start docker.service
sudo usermod -aG docker $USER

chsh -s /bin/zsh
# End
