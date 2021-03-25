# 
# Elevate.PS1
# Copyright (c) 2021 0J3. All Rights Reserved.
# 

$a=$b.Values + $args;$c=$a[0];$e=$a[1..($a.length-1)];if(!$c){echo "No Arguments Provided!"}else{Start-Process $c "$e" -Verb RunAs;}