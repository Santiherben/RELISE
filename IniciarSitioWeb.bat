@echo off
title RELISE - Red Latinoamericana de Investigacion Social y Educativa
color 0B

echo ============================================================
echo   RELISE - Portal Web Oficial
echo   Red Latinoamericana de Investigacion Social y Educativa
echo ============================================================
echo.

cd /d "%~dp0SitioWeb"

if not exist "node_modules" (
    echo [INFO] Instalando dependencias necesarias por primera vez...
    call npm install
    echo.
)

echo [INFO] Iniciando servidor y abriendo el navegador automaticamente...
echo [INFO] Para detener el servidor, presiona Ctrl + C o cierra esta ventana.
echo.

call npm run dev

pause
