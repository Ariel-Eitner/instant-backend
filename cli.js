#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const chalk = require("chalk");

const program = new Command();

const importUserModuleAutomatically = () => {
  const appModulePath = path.join(process.cwd(), "src", "app.module.ts");
  if (!fs.existsSync(appModulePath)) {
    console.error(
      chalk.red("app.module.ts not found in the expected directory.")
    );
    return;
  }

  let content = fs.readFileSync(appModulePath, "utf8");

  const moduleImportStatement = `import { UsersModule } from './users/users.custom.module';\n`;

  // Inserting the import at the beginning of the file
  if (!content.startsWith(moduleImportStatement)) {
    content = moduleImportStatement + content;

    // Ensure the UsersCustomModule is included in the imports array of @Module decorator
    const importsRegex = /imports:\s*\[([^\]]*)\]/s;
    const matches = content.match(importsRegex);
    if (matches) {
      const beforeImports = content.substring(0, matches.index);
      const imports = matches[1]
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i);
      imports.push("UsersModule");
      const afterImports = content.substring(matches.index + matches[0].length);
      const newImports = `imports: [\n    ${imports.join(",\n    ")},\n  ]`;
      content = beforeImports + newImports + afterImports;
    }

    fs.writeFileSync(appModulePath, content);
    console.log(
      chalk.green("UsersCustomModule imported successfully into app.module.ts")
    );
  } else {
    console.log(
      chalk.yellow("UsersCustomModule is already imported in app.module.ts")
    );
  }
};

const generateFiles = (fileMap, srcDir, options) => {
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
      console.log(
        chalk.green("Created") +
          " " +
          chalk.blue(destination) +
          " " +
          chalk.green("successfully.")
      );
    } catch (error) {
      console.error(chalk.red(`Error generating ${destination}:`, error));
    }
  });

  console.log(chalk.green("Custom user files generated successfully."));

  if (options.import) {
    importUserModuleAutomatically();
  }
};

program
  .command("users")
  .description(
    "Generate custom user files in the src/users directory and optionally import UsersCustomModule into app.module.ts"
  )
  .option(
    "--import",
    "Import the UsersCustomModule automatically into app.module.ts"
  )
  .action((options) => {
    const fileMap = {
      "create-user.custom.dto.ts.tpl": "create-user.custom.dto.ts",
      "update-user.custom.dto.ts.tpl": "update-user.custom.dto.ts",
      "user.custom.schema.ts.tpl": "user.custom.schema.ts",
      "users.custom.service.ts.tpl": "users.custom.service.ts",
      "users.custom.controller.ts.tpl": "users.custom.controller.ts",
      "users.custom.module.ts.tpl": "users.custom.module.ts",
    };

    const srcDir = path.join(process.cwd(), "src", "users");
    generateFiles(fileMap, srcDir, options);
  });

program.parse(process.argv);
