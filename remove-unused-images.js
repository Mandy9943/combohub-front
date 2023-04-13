const glob = require("glob");
const fs = require("fs-extra");
const path = require("path");

// Cambia esta ruta si tu carpeta de imágenes está en otro lugar
const imagesFolder = "./public/images";

function normalizePath(filePath) {
  return filePath.split(path.sep).join("/");
}

// Encuentra todos los archivos de tu proyecto que puedan contener referencias a imágenes
const sourceFiles = glob.sync("./**/*.{js,jsx,ts,tsx,css,scss}", {
  ignore: ["node_modules/**/*", "out/**/*"],
});

let usedImages = new Set();

// Busca referencias a imágenes en tus archivos de código fuente
// Busca referencias a imágenes en tus archivos de código fuente
sourceFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const regex = /\/?images\/(?:[\w-_]+\/)*[\w-_]+\.(?:png|jpg|jpeg|gif|svg)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    usedImages.add(match[0].replace(/^\/?images\//, ""));
  }
});

// Encuentra todas las imágenes en la carpeta de imágenes
const allImages = glob.sync("**/*.{png,jpg,jpeg,gif,svg}", {
  cwd: imagesFolder,
});
console.log("usedImages", usedImages);
console.log("allImages", allImages);
// Elimina las imágenes no utilizadas
allImages.forEach((image) => {
  const normalizedImagePath = normalizePath(image);
  if (!usedImages.has(normalizedImagePath)) {
    const imagePath = path.join(imagesFolder, image);
    console.log(`Eliminando imagen no utilizada: ${imagePath}`);
    fs.removeSync(imagePath);
  }
});

console.log("Proceso completado. Imágenes no utilizadas eliminadas.");
