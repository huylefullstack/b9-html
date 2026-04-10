const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "public");
fs.mkdirSync(out, { recursive: true });

for (const f of ["desktop.html", "mobile.html", "index.html"]) {
  fs.copyFileSync(path.join(__dirname, f), path.join(out, f));
}

const imagesDir = path.join(__dirname, "images");
if (fs.existsSync(imagesDir)) {
  const outImages = path.join(out, "images");
  fs.mkdirSync(outImages, { recursive: true });
  for (const name of fs.readdirSync(imagesDir)) {
    const src = path.join(imagesDir, name);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, path.join(outImages, name));
    }
  }
}
