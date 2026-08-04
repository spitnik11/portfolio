@echo off
REM Desktop "Portfolio" icon launches this. It hands off to the PowerShell
REM launcher, which starts the local server, waits until it's ready, then
REM opens your browser. Close the "npm run dev" window to stop the site.
start "" powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0Open-Portfolio.ps1"
