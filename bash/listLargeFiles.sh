#!/bin/bash

size=300
filelist=$(ls -la -R)

for file in $filelist; do
	if [ -f  $file ]; then 
		filename=$(stat -c %n $file)
		filesize=$(stat -c %s $file)
	if [[ $filesize -ge $size ]]; then
        	echo "$filename - $filesize bytes"
	fi
	fi
done
