const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "public");
fs.mkdirSync(out, { recursive: true });

for (const f of ["desktop.html", "mobile.html", "index.html"]) {
  fs.copyFileSync(path.join(__dirname, f), path.join(out, f));
}
