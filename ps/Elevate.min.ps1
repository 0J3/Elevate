# 
# Elevate.PS1
# Copyright (c) 2021 0J3. All Rights Reserved.
# 

Set-Location "$env:USERPROFILE";$a=$b.Values + $args;$c=$a[0];$e=$a[1..($a.length-1)];if(!$c){Write-Output "No Arguments Provided!"}else{Start-Process $c "$e" -Verb RunAs;}