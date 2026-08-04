# Robust local launcher for the portfolio.
# Starts the dev server if it isn't already running, WAITS until the port is
# actually accepting connections, then opens your browser. No fixed-delay race.
$ErrorActionPreference = 'SilentlyContinue'

$dir  = 'Z:\Claude app\portfolio'
$port = 3000
$url  = "http://localhost:$port"

function Test-Port {
  param([int]$p)
  $client = New-Object System.Net.Sockets.TcpClient
  try { $client.Connect('127.0.0.1', $p); return $client.Connected }
  catch { return $false }
  finally { $client.Close() }
}

# Only start a server if nothing is already listening (avoids duplicates).
if (-not (Test-Port $port)) {
  $env:PORT = "$port"
  Start-Process -FilePath 'cmd.exe' -ArgumentList '/k', 'npm run dev' -WorkingDirectory $dir
}

# Wait until the server is genuinely up (Next needs a moment to boot/compile).
for ($i = 0; $i -lt 90; $i++) {
  if (Test-Port $port) { break }
  Start-Sleep -Seconds 1
}

Start-Process $url
