#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const { Command } = require("commander");
const chalk = require("chalk");
const program = new Command();

const generateFiles = (fileMap, srcDir) => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  Object.entries(fileMap).forEach(([template, destination]) => {
    const templatePath = path.join(
      __dirname,
      "src",
      "templates",
      "users",
      template
    );
    const destinationPath = path.join(srcDir, destination);

    try {
      const content = fs.readFileSync(templatePath, "utf8");
      fs.writeFileSync(destinationPath, content);

      // Aquí usamos chalk para colorear el mensaje de éxito
      console.log(
        chalk.green("Created") +
          " " +
          chalk.blue(destination) +
          " " +
          chalk.green("successfully.")
      );
    } catch (error) {
      // Los mensajes de error se pueden mostrar en rojo, por ejemplo
      console.error(chalk.red(`Error generating ${destination}:`, error));
    }
  });

  console.log(
    chalk.yellow("Custom") +
      " " +
      chalk.blue("user files") +
      " " +
      chalk.green("generated successfully.")
  );
};

program
  .command("users")
  .description("Generate custom user files in the src/users directory")
  .action(() => {
    const fileMap = {
      "create-user.custom.dto.ts.tpl": "create-user.custom.dto.ts",
      "update-user.custom.dto.ts.tpl": "update-user.custom.dto.ts",
      "user.custom.schema.ts.tpl": "user.custom.schema.ts",
      "users.custom.service.ts.tpl": "users.custom.service.ts",
      "users.custom.controller.ts.tpl": "users.custom.controller.ts",
      "users.custom.module.ts.tpl": "users.custom.module.ts",
    };

    const srcDir = path.join(process.cwd(), "src", "users");
    generateFiles(fileMap, srcDir);
  });

program.parse(process.argv);
