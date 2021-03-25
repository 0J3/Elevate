# 
# Elevate.PS1
# Copyright (c) 2021 0J3. All Rights Reserved.
# 

Set-Location "$env:USERPROFILE"

$allArgs = $PsBoundParameters.Values + $args;

$cmd = $allArgs[0];

$cmdArgs = $allArgs[1..($allArgs.length-1)];

if (!$cmd) {
  Write-Output "No Arguments Provided!"
} else {
  Start-Process $cmd "$cmdArgs" -Verb RunAs;
}