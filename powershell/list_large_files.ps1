$size = 51200
$files = Get-ChildItem -recurse

foreach ($file in $files) {
    if ($file.length -ge $size) {
        Write-Host "$($file.name) | $($file.length) bytes"
    }
}
