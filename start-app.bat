@echo off
echo ========================================
echo GITDEX App - Installation & Startup
echo ========================================
echo.

echo Stopping any existing Node processes...
taskkill /F /IM node.exe 2>nul

echo.
echo Clearing npm cache...
call npm cache clean --force

echo.
echo Installing all dependencies with framer-motion...
call npm install

echo.
echo ========================================
echo Installation complete!
echo Starting development server...
echo ========================================
echo.
echo The app will open at: http://localhost:3000
echo.
call npm start

pause
