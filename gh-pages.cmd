cd dist
git rm -rf .git
git init
git add .
git commit -a -m "deploy to Github pages"
git push --force https://github.com/MedialandDev/anteater.git master:gh-pages

pause