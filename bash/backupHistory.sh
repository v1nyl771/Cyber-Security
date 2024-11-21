#!/bin/bash

date=$(date +%y-%m-%d)

echo "Please specify what command you are searching for:"
read a

grep -a "$a" ~/.bash_history > $date.hist

echo "Done! To read the file, type in 'cat $date.hist'"
