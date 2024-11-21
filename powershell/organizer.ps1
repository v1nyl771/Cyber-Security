# Set the folder path
$folderPath = "C:\Users\Vinyl\Downloads\Website\HTMLs and CSS\Website2ElectricBoogaloo"

# Get all files in the folder
$files = Get-ChildItem -Path $folderPath -File

foreach ($file in $files) {
    # Get the file extension (without the dot)
    $extension = $file.Extension.TrimStart('.').ToUpper()
    
    # Create a subfolder for the extension if it doesn't exist
    $subfolderPath = Join-Path -Path $folderPath -ChildPath $extension
    if (-not (Test-Path -Path $subfolderPath)) {
        New-Item -Path $subfolderPath -ItemType Directory
    }

    # Move the file to the subfolder
    Move-Item -Path $file.FullName -Destination $subfolderPath
}

Write-Host "Files have been organized!"
