@echo off
REM Launches the portfolio locally and opens it in your browser.
REM Double-click the desktop "Portfolio" icon, or run this file directly.
cd /d "Z:\Claude app\portfolio"

REM Start the dev server in its own window (leave it running while you view).
start "Portfolio server" cmd /c "npm run dev"

REM Give it a few seconds to boot, then open the browser.
timeout /t 5 /nobreak >nul
start "" http://localhost:3000
