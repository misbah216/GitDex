@echo off
echo Clearing cache and restarting...
REM Kill any running node processes
taskkill /F /IM node.exe 2>nul

REM Delete build cache
if exist build rmdir /s /q build
if exist .eslintcache del .eslintcache 2>nul

REM Clear npm cache
call npm cache clean --force

echo.
echo Cache cleared! Now run: npm start
pause
