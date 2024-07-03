#!/usr/bin/zsh
ip=`avahi-browse --terminate --resolve _adb-tls-connect._tcp | grep "address " | tail -1 | grep -o -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'`
port=`avahi-browse --terminate --resolve _adb-tls-connect._tcp | grep "port " | head -1 | tr -d -c 0-9`
adb connect $ip:$port
