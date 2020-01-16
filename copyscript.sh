#!/bin/zsh
# Created with /Users/ivo/Dropbox/Shell-Scripts/cmd/crea at 2019-11-25 09:29:27
files=$(ls *.png )
local IFS=$'\n'
if [ $ZSH_VERSION ]; then
  setopt sh_word_split
fi
i=1
mkdir -p f2l
for file in $files; do
	mv "$file" "f2l/f2l_0$i.png"
	i=$(( $i + 1 ))
done