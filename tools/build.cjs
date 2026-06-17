const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(source)) return;
  
  var files = [];
  var targetFolder = target;
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      var curTarget = path.join(targetFolder, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        fs.copyFileSync(curSource, curTarget);
      }
    });
  }
}

// 1. Clean dist
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true });
}
fs.mkdirSync(DIST, { recursive: true });

// 2. Copy root static files
const filesToCopy = ['index.html', 'about.html', 'favicon.svg'];
filesToCopy.forEach(file => {
  const src = path.join(ROOT, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DIST, file));
  }
});

// 3. Copy assets and cases folders
copyFolderRecursiveSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));
copyFolderRecursiveSync(path.join(ROOT, 'cases'), path.join(DIST, 'cases'));

// 4. Copy public folder files (CNAME, favicon.svg, .nojekyll, assets/docs/..., assets/img/...)
if (fs.existsSync(path.join(ROOT, 'public'))) {
  copyFolderRecursiveSync(path.join(ROOT, 'public'), DIST);
}

console.log('Static build completed successfully in ./dist/');
