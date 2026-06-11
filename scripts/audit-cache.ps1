$ErrorActionPreference = "Stop"

$pattern = '(^|/)(node_modules|dist|build|out|\.next|\.vercel|\.netlify|\.cache|\.parcel-cache|\.vite|\.turbo|coverage|\.lighthouseci|playwright-report|test-results)(/|$)|(\.log$|\.tsbuildinfo$|\.eslintcache$|\.stylelintcache$|Thumbs\.db$|\.DS_Store$|desktop\.ini$)'

$tracked = git ls-files | Select-String -Pattern $pattern

if ($tracked) {
  Write-Host "Tracked cache/noise files found:" -ForegroundColor Red
  $tracked | ForEach-Object { Write-Host $_.Line -ForegroundColor Red }
  exit 1
}

Write-Host "Cache audit passed. No tracked cache/noise files found." -ForegroundColor Green
