const fs = require("fs");
const path = require("path");

function writeSchemaFile(schemaContent, outputPath) {
  const dirname = path.dirname(outputPath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }

  fs.writeFile(outputPath, schemaContent, (err) => {
    if (err) {
      console.error("Error al escribir el archivo de esquema:", err);
    } else {
      console.log("Esquema generado con éxito en:", outputPath);
    }
  });
}

module.exports = writeSchemaFile;
