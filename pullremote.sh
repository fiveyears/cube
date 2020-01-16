#!/bin/zsh
# Created with /Users/ivo/Dropbox/Shell-Scripts/cmd/crea at 2019-12-11 19:26:07
# if [ -z "$1" ]; then
# 	echo "No scriptname is given!"
# 	echo "Usage $0 scriptname"
# 	exit 0
# fi
# option=$(testkey)
# #  512 = shift
# # 4096 = control
# # 2048 = option
test -d "/Volumes/SSD/Develop/web"  && destination="$_/"
test -d "/Volumes/graid/web"  && destination="$_/"
source=1u1:wadokai/8bef67de-2f12-45e4-9fb9-7dc0a5fde134/W1
option="-avzS"
echo "Syncing \"$source\" to \"$destination\"" 
rsync $option  --delete --prune-empty-dirs  --exclude='.Spotlight-V100'  --exclude='.DocumentRevisions-V100' \
      --exclude='.DS_Store' --exclude='.Trash*/' --exclude='.TemporaryItems/' --exclude='.fseventsd/' --exclude='Backups.backupdb/' \
      --filter='P .Spotlight-V100/' --filter='P .DocumentRevisions-V100/' --filter='P .fseventsd/' --filter='P .TemporaryItems/' \
      --exclude='*~' "$source" "$destination" 
# open -a "Google Chrome.app" https://fiveyears.wadokai-dresden.de
