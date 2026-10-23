@echo off
echo =======================================================
echo    PUBLICAR / ACTUALIZAR EN GITHUB PAGES (RELISE)
echo =======================================================
echo.
echo 1/3 Compilando portal web...
cd SitioWeb
call npm run build
if %errorlevel% neq 0 (
    echo Error al compilar.
    pause
    exit /b %errorlevel%
)
cd ..

echo.
echo 2/3 Guardando cambios en Git...
gh auth switch -u Santiherben >nul 2>&1
git add .
git commit -m "Actualizacion portal RELISE"
git push origin main

echo.
echo 3/3 Publicando en GitHub Pages...
git subtree push --prefix SitioWeb/dist origin gh-pages

echo.
echo =======================================================
echo    SITIO PUBLICADO CON EXITO EN:
echo    https://www.relise.org/
echo    (Respaldo: https://santiherben.github.io/RELISE/)
echo =======================================================
echo.
pause
