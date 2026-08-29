@echo off
title RELISE - Generar Version para Hosting Beta
color 0A

echo ============================================================
echo   RELISE - Generar Archivos para Publicacion Beta
echo ============================================================
echo.

cd /d "%~dp0SitioWeb"

echo [INFO] Compilando version de produccion...
call npm run build

echo.
echo ============================================================
echo [EXITO] Archivos generados en la carpeta:
echo   %~dp0SitioWeb\dist
echo.
echo Estos archivos estan listos para subirse a GitHub Pages,
echo Vercel, Netlify o cualquier servidor web.
echo ============================================================
echo.
pause
