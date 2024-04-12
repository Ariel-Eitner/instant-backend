#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const generateMongooseSchema = require("./utils/generateMongooseSchema");
const writeSchemaFile = require("./utils/writeSchemaFile");

const interfacesPath = path.join(__dirname, "../src/core/interfaces");

fs.readdir(interfacesPath, (err, files) => {
  if (err) {
    console.error("Error al leer la carpeta de interfaces:", err);
    return;
  }
  files.forEach((file) => {
    if (path.extname(file) === ".ts") {
      const interfacePath = path.join(interfacesPath, file);
      const interfaceName = path.basename(file, ".ts");
      const outputPath = path.join(
        __dirname,
        `../src/orms/mongoose/schemas/${interfaceName}.base.schema.ts`
      );

      fs.readFile(interfacePath, "utf8", (err, data) => {
        if (err) {
          console.error(`Error al leer el archivo de interfaz ${file}:`, err);
          return;
        }

        const schemaContent = generateMongooseSchema(data, interfaceName);
        writeSchemaFile(schemaContent, outputPath);
      });
    }
  });
});
