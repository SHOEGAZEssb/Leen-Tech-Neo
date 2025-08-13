param(
  [Parameter(Mandatory=$true, Position=0, ValueFromRemainingArguments=$true)]
  [string[]]$PackwizArgs,

  [Parameter(Mandatory=$false)]
  [ValidateSet("client","server","both")]
  [string]$Side = "both"
)

function Edit-PwToml($file) {
  $content = Get-Content -Raw -Path $file

  # replace or add side
  if ($content -match '(?im)^\s*side\s*=\s*".*"\s*$') {
    $content = [regex]::Replace($content, '(?im)^\s*side\s*=\s*".*"\s*$', "side = `"$Side`"")
  } else {
    $content = $content.TrimEnd() + "`nside = `"$Side`"`n"
  }

  Set-Content -Path $file -Value $content -NoNewline
}

# Parse provider/args
$provider = $PackwizArgs[0]
$cmdArgs = $PackwizArgs[1..($PackwizArgs.Length-1)]

# Forward --side to modrinth only if Side is not "both"
if ($provider -eq 'modrinth' -and $Side -ne 'both') {
  $cmdArgs = @($cmdArgs + @('--side', $Side))
}

# Run packwiz
& packwiz $provider @cmdArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Always edit the newest .pw.toml, even if Side is "both"
$pw = Get-ChildItem -Path "mods" -Filter "*.pw.toml" |
      Sort-Object LastWriteTime -Descending |
      Select-Object -First 1

if (-not $pw) {
  Write-Error "No mods/*.pw.toml found. Did packwiz create the mod file?"
  exit 1
}

Edit-PwToml $pw.FullName
Write-Host "Updated $($pw.Name) with side=$Side"
