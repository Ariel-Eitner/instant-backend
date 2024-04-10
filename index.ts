// Exportar DTOs Base
export * from "./src/modules/users/dto/create-user.base.dto";
export * from "./src/modules/users/dto/update-user.base.dto";

// Exportar Esquemas Base
export * from "./src/orms/mongoose/schemas/user.base.schema";

// Exportar Servicios Base
export * from "./src/modules/users/users.base.service";

// Exportar Controladores Base
export * from "./src/modules/users/users.base.controller";

export * from "./src/core/utils/roles";

// Opcionalmente, si decides incluir las versiones personalizadas en tu paquete, puedes descomentar estas líneas:
// export * from "./src/dto/create-user.custom.dto";
// export * from "./src/schemas/user.custom.schema";
// export * from "./src/services/users.custom.service";
// export * from "./src/controllers/users.custom.controller";
// export * from "./src/modules/users.custom.module";
