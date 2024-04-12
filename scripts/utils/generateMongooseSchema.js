function generateMongooseSchema(interfaceContent) {
  const interfaceNameMatch = interfaceContent.match(/interface (\w+)/);
  if (!interfaceNameMatch) {
    console.error("No se pudo encontrar el nombre de la interfaz.");
    return;
  }
  const interfaceName = interfaceNameMatch[1];
  const className = interfaceName.replace(/^I/, "") + "Base";
  const properties = interfaceContent.match(/(\w+)(\??): (\w+)/g);
  const mongooseProperties = properties
    .map((prop) => {
      const [nameWithType, type] = prop.split(":").map((s) => s.trim());
      const isOptional = nameWithType.includes("?");
      const name = nameWithType.replace("?", "");
      const propOptions = getPropOptionsByName(name);

      const mongooseProp = `
    @Prop(${propOptions})
    ${name}${isOptional ? "?" : ""}: ${type};`;

      return mongooseProp;
    })
    .join("\n  ");

  let schemaContent = `
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class ${className} {
  ${mongooseProperties}
}

export type ${className}Document = ${className} & Document;
const ${className}Schema = SchemaFactory.createForClass(${className});
`.trim();

  // Verificar si existen las propiedades createdAt y updatedAt
  const hasCreatedAt = properties.some((prop) => prop.includes("createdAt?:"));
  const hasUpdatedAt = properties.some((prop) => prop.includes("updatedAt?:"));

  if (hasCreatedAt || hasUpdatedAt) {
    schemaContent += `

${className}Schema.pre("save", function(next) {
  if (this.isNew && ${hasCreatedAt}) {
    this.createdAt = new Date();
  }
  next();
});

${className}Schema.pre("findOneAndUpdate", function(next) {
  if (${hasUpdatedAt}) {
    this.set({ updatedAt: new Date() });
  }
  next();
});
`;
  }

  schemaContent += `

export { ${className}Schema };
`;

  return schemaContent;
}

function getPropOptionsByName(name) {
  if (
    name.toLowerCase().includes("email") ||
    name.toLowerCase().includes("id") ||
    name.toLowerCase().includes("url")
  ) {
    return `{ unique: true, sparse: true, lowercase: true, required: false }`;
  } else {
    return "{required: false}";
  }
}

module.exports = generateMongooseSchema;
