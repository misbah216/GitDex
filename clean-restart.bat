@echo off
echo Killing Node processes...
taskkill /F /IM node.exe 2>nul

echo Deleting node_modules...
if exist node_modules rmdir /s /q node_modules

echo Clearing npm cache...
call npm cache clean --force

echo Reinstalling dependencies...
call npm install

echo.
echo All set! Now run: npm start
pause
