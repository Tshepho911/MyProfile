@echo off
REM === Step 1: Build & Publish Blazor WebAssembly App ===
echo ######Publishing project...
dotnet publish -c Release -o publish

REM === Step 2: Navigate to build output ===
cd publish\wwwroot

REM === Step 3: Clean current remote gh-pages branch ===
echo ######Wiping gh-pages branch on remote...
git init
git remote add origin https://github.com/Tshepho911/MyBlazorSite.git
git fetch origin
git checkout gh-pages

REM === Remove all tracked files ===
git rm -r -f *
echo ###### Cleaned previous contents.

REM === Step 4: Add fresh published files ===
git add .
git commit -m "Reset & redeploy $(date /t) $(time /t)"
git push -f origin gh-pages

git checkout main
echo ########switching back to main repo .....
cd E:\Projects\MyOnlineProfile\MyBlazorSite
echo ✅ gh-pages redeployed successfully!
pause
