$ErrorActionPreference = "Stop"

Write-Host "Cleaning ignored local cache files..." -ForegroundColor Yellow
git clean -fdX
Write-Host "Local ignored cache cleanup complete." -ForegroundColor Green
