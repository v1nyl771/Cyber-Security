#!/bin/bash

figlet Calculator | lolcat
echo "Enter your first number:";
read a

echo "Enter your Operand:";
read c

echo "Enter your second number:";
read b


echo""

if [[ $c == + ]]; then
echo "The answer is:"
expr "scale=10;$a + $b" | bc

elif [[ $c == - ]]; then
echo "The answer is:"
expr "scale=10;$a - $b" | bc

elif [[ $c == \* ]]; then
echo "The answer is:"
expr "scale=10;$a \* $b" | bc

elif [[ $c == / ]]; then
echo "The answer is:"
expr "scale=10;$a / $b" | bc

else
echo "Nuh uh"
fi
