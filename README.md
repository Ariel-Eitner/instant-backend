# @ariel-eitner/instant-backend

instant-backend es una solución para crear endpoints super rápidos, con datos normalizados y seguros.

## Changelog

Para ver los cambios y actualizaciones de cada versión, consulta el [Changelog](./CHANGELOG.md).

## Características

- Esquema perfecto para utilizar con NestJs.
- Solo compatible con MongoDb y moongose por el momento.
- Instalar el paquete, ejecutar el script y ya tienes un backend con usuarios listo para usarse.

## Requisitos previos

Para que este paquete funcione correctamente, se necesitan una serie de pasos previos

- Tener un backend en NestJS, para esto hay que tener instalado NestJS con su CLI

```bash
npm i -g @nestjs/cli
```

- Luego crear un nuevo proyecto en la linea de comandos

```bash
nest new nombre-del-proyecto
```

- Una vez tienes el proyecto, debes instalar las siguientes dependencias

```bash
npm i @nestjs/mapped-types @nestjs/mongoose @nestjs/passport @nestjs/platform-express class-transformer class-validator mongodb mongoose
```

## Instalación de instant-backend

Para instalar el paquete, solo debes ejecutar en la raíz de tu proyecto

```bash
npm i @ariel-eitner/instant-backend
```

# Uso Básico

Para tener el primer endpoint de Users, ejecuta el siguiente código

```bash
npx instant-backend users
```

Esto creara una carpeta en src/users con componentes con extension .custom, esto es para poder ajustar los requerimientos propios de cada proyecto.

## Flags

si corremos el siguiente código, nos generara una importación automática en el app.module.ts de NestJS

```bash
npx instant-backend users --import
```

esto genera las siguientes importaciones en el código en app module, sin sobrescribir el código existente

```bash
import { UsersModule } from './users/users.custom.module';

@Module({
  imports: [
    UsersModule,
  ],
})
export class AppModule implements NestModule {}
```

## Lista de props que soporta nativamente

en la siguiente interfaz están representados todos los campos que se pueden usar en users, esto a su vez es expandible en los archivos .custom

```bash
export interface IUser {
  address?: string;
  bio?: string;
  birthDate?: Date;
  company?: string;
  country?: string;
  createdAt?: Date;
  cuit?: string;
  dni?: string;
  driverLicenseNumber?: string;
  email?: string;
  employmentStatus?: string;
  facebookId?: string;
  facebookUrl?: string;
  firstName?: string;
  gender?: string;
  githubId?: string;
  githubUrl?: string;
  googleId?: string;
  instagramHandle?: string;
  isActive?: boolean;
  language?: string;
  lastName?: string;
  linkedinId?: string;
  linkedInUrl?: string;
  maritalStatus?: string;
  microsoftId?: string;
  middleName?: string;
  nationality?: string;
  occupation?: string;
  passportNumber?: string;
  password?: string;
  phoneNumber?: string;
  refreshToken?: string;
  resetPasswordExpires?: Date;
  resetPasswordToken?: string;
  role?: string;
  ssn?: string;
  taxId?: string;
  twitterHandle?: string;
  updatedAt?: Date;
  websiteUrl?: string;
}
```

## Roles disponibles

También siguiendo buenas practicas, el campo role tiene un enum que viene de el siguiente esquema

```bash
export const roles = [
  "admin",
  "analyst",
  "client",
  "consultant",
  "contractor",
  "customer",
  "designer",
  "developer",
  "director",
  "editor",
  "employee",
  "executive",
  "guest",
  "intern",
  "manager",
  "moderator",
  "owner",
  "partner",
  "professional",
  "provider",
  "stakeholder",
  "subscriber",
  "tester",
  "user",
  "volunteer",
];
```

## Restricciones

este paquete maneja de forma nativa restricciones de unicidad, esto es, que el campo email sea único e irrepetible, los id, paginas web, redes sociales, para evitar registros duplicados, este es el schema base del cual se toman los valores, ademas, maneja automáticamente la fecha de creación y update de un usuario, para que los campos se generen automáticamente

```bash
@Schema()
export class UserBase {
  @Prop()
  address?: string;

  @Prop()
  bio?: string;

  @Prop()
  birthDate?: Date;

  @Prop()
  company?: string;

  @Prop()
  country?: string;

  @Prop({ default: Date.now })
  createdAt?: Date;

  @Prop({ unique: true, sparse: true, lowercase: true })
  cuit?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  dni?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  driverLicenseNumber?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  email?: string;

  @Prop()
  employmentStatus?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  facebookId?: string;

  @Prop({ unique: true, sparse: true })
  facebookUrl?: string;

  @Prop()
  firstName?: string;

  @Prop()
  gender?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  githubId?: string;

  @Prop({ unique: true, sparse: true })
  githubUrl?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  googleId?: string;

  @Prop({ unique: true, sparse: true })
  instagramHandle?: string;

  @Prop({ default: true })
  isActive?: boolean;

  @Prop()
  language?: string;

  @Prop()
  lastName?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  linkedinId?: string;

  @Prop({ unique: true, sparse: true })
  linkedInUrl?: string;

  @Prop()
  maritalStatus?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  microsoftId?: string;

  @Prop()
  middleName?: string;

  @Prop()
  nationality?: string;

  @Prop()
  occupation?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  passportNumber?: string;

  @Prop()
  password?: string;

  @Prop({ unique: true, sparse: true })
  phoneNumber?: string;

  @Prop()
  refreshToken?: string;

  @Prop()
  resetPasswordExpires?: Date;

  @Prop()
  resetPasswordToken?: string;

  @Prop({ enum: roles })
  role?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  ssn?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  taxId?: string;

  @Prop({ unique: true, sparse: true })
  twitterHandle?: string;

  @Prop({ default: Date.now })
  updatedAt?: Date;

  @Prop({ unique: true, sparse: true })
  websiteUrl?: string;
}
```

## Proyectos que se pueden ver beneficiados con este paquete

Al ser muy completo el campo Users, se puede usar en una diversidad de proyectos

1. Redes sociales y plataformas de comunidad: Los campos de identificación social (como facebookId, linkedinId, etc.), junto con bio, websiteUrl, y language, son perfectos para perfiles de usuario en redes sociales.

2. Sistemas de gestión de empleados: Campos como company, occupation, y employmentStatus son útiles para sistemas internos de gestión de recursos humanos.

3. Plataformas de comercio electrónico: Para gestionar cuentas de usuario con información detallada (address, phoneNumber, email) y potencialmente vincular a redes sociales o sistemas de autenticación externos.

4. Foros en línea y plataformas de blogs: Utilizando campos como firstName, lastName, bio, y websiteUrl para perfilar a los autores y participantes.

5. Sistemas de reservas y pedidos en línea: La información de contacto (email, phoneNumber) y dirección (address, country) es crucial para gestionar reservas y pedidos.

6. Aplicaciones de gestión de proyectos y tareas: La identificación de usuarios a través de email y roles permite la asignación y gestión de tareas y proyectos.

7. Plataformas de aprendizaje en línea: Utilizando language, country, y bio para personalizar la experiencia de aprendizaje y conectar estudiantes con instructores.

## Proyectos donde no es muy útil (aún)

1. Aplicaciones de salud o historiales clínicos: Falta información médica específica, como historial de enfermedades, medicaciones, etc.

2. Sistemas bancarios o financieros: Aunque contiene algunos datos personales, carece de campos específicos para transacciones financieras, cuentas bancarias, créditos, etc.

3. Gestión de propiedades inmobiliarias: La interfaz no incluye campos específicos para manejar propiedades, contratos de alquiler o ventas.

4. Plataformas de viajes y turismo: Aunque podría usarse para gestionar usuarios, no tiene campos específicos para reservas de viajes, puntos de interés, guías turísticas, etc.

5. Sistemas gubernamentales o administrativos: Aunque tiene algunos datos básicos como dni, cuit, ssn, taxId, no está completo y pueden necesitar mas métodos de seguridad y cumplimiento de normas

# Service

El servicio de Users ya viene preconfigurado en users.custom.service.ts

## Funciones del Servicio UsersService:

1. createUser()

- Descripción: Crea un nuevo usuario verificando primero que el correo electrónico no esté en uso. Garantiza la unicidad del correo electrónico en minúsculas para evitar duplicados.
- Seguridad y Unicidad: Utiliza findOne para buscar un usuario existente por correo electrónico. Si encuentra uno, lanza una excepción de conflicto para evitar la creación de duplicados.

2. findAllUsers():

- Descripción: Recupera todos los usuarios registrados en la base de datos.
- Seguridad y Unicidad: No aplica directamente, pero al recuperar todos los usuarios, puede usarse para monitorear o gestionar usuarios.

3. findUserById():

- Descripción: Busca y devuelve un usuario específico por su ID.
- Seguridad y Unicidad: Asegura que cada usuario sea único al buscar por ID, un identificador que MongoDB garantiza que sea único.

4. findUserByEmail():

- Descripción: Encuentra un usuario por su correo electrónico, importante para operaciones que requieren identificación por correo, como el inicio de sesión.
- Seguridad y Unicidad: Realiza búsquedas por correo electrónico en minúsculas para tratar de manera uniforme los correos y evitar discrepancias por mayúsculas/minúsculas.

5. updateUser():

- Descripción: Actualiza la información de un usuario existente basado en su ID.
- Seguridad y Unicidad: Garantiza la integridad de los datos al permitir la actualización solo si el usuario existe, verificado por su ID único.

6. deleteUser():

- Descripción: Elimina un usuario de la base de datos basado en su ID.
- Seguridad y Unicidad: Asegura que solo se pueda eliminar un usuario si existe, previniendo errores de referencia.

7. findUsers(query):

- Descripción: Realiza una búsqueda flexible de usuarios basada en un conjunto de criterios especificados en query.
- Seguridad y Unicidad: Permite filtrar usuarios por diversos campos, manteniendo la flexibilidad y garantizando que las respuestas sean consistentes con los criterios de búsqueda.

## Ejemplo de uso

Supongamos que tenemos corriendo el servidor de NestJs en http://localhost:3600

Al ejecutar el script

```bash
npx instant-backend users --import
```

vamos a tener directamente un endpoint en http://localhost:3600/users al cual ya le podemos hacer peticiones HTTP.

Usando una herramienta como Thunder Client o PostMan, podemos crear el siguiente usuario de prueba con el método POST:

```bash
{
  "address": "123 Instant-Backend",
  "bio": "Creator of instant-backend",
  "birthDate": "1995-10-04",
  "company": "Instant Backend Inc.",
  "country": "Internet",
  "cuit": "20-12345678-9",
  "dni": "12345678",
  "driverLicenseNumber": "B1234C567D",
  "email": "instant@backend.com",
  "employmentStatus": "Self-employed",
  "facebookId": "instantbackend",
  "facebookUrl": "https://www.facebook.com/instantbackend",
  "firstName": "Instant",
  "gender": "Backend",
  "githubId": "instant-backend",
  "githubUrl": "https://github.com/instant-backend",
  "googleId": "108204809480948029480",
  "instagramHandle": "@instantbackend",
  "isActive": true,
  "language": "EN",
  "lastName": "Backend",
  "linkedinId": "instant-backend",
  "linkedInUrl": "https://www.linkedin.com/in/instant-backend",
  "maritalStatus": "Single",
  "microsoftId": "instantbackend@outlook.com",
  "middleName": "Awesome",
  "nationality": "Internet Citizen",
  "occupation": "Developer",
  "passportNumber": "A12345678",
  "password": "securePassword123!",
  "phoneNumber": "+1234567890",
  "refreshToken": "randomRefreshTokenString",
  "resetPasswordExpires": "2024-12-31",
  "resetPasswordToken": "randomResetPasswordToken",
  "role": "admin",
  "ssn": "123-45-6789",
  "taxId": "AB123456C",
  "twitterHandle": "@instantbackend",
  "updatedAt": "2024-04-10",
  "websiteUrl": "https://www.instantbackend.com"
}
```

Una vez creado el usuario, el servidor nos devolverá esta respuesta

```bash
{
  "user": {
    "address": "123 Instant-Backend",
    "bio": "Creator of instant-backend",
    "birthDate": "1995-10-04T00:00:00.000Z",
    "company": "Instant Backend Inc.",
    "country": "Internet",
    "cuit": "20-12345678-9",
    "dni": "12345678",
    "driverLicenseNumber": "b1234c567d",
    "email": "instant@backend.com",
    "employmentStatus": "Self-employed",
    "facebookId": "instantbackend",
    "facebookUrl": "https://www.facebook.com/instantbackend",
    "firstName": "Instant",
    "gender": "Backend",
    "githubId": "instant-backend",
    "githubUrl": "https://github.com/instant-backend",
    "googleId": "108204809480948029480",
    "instagramHandle": "@instantbackend",
    "isActive": true,
    "language": "EN",
    "lastName": "Backend",
    "linkedinId": "instant-backend",
    "linkedInUrl": "https://www.linkedin.com/in/instant-backend",
    "maritalStatus": "Single",
    "microsoftId": "instantbackend@outlook.com",
    "middleName": "Awesome",
    "nationality": "Internet Citizen",
    "occupation": "Developer",
    "passportNumber": "a12345678",
    "password": "securePassword123!",
    "phoneNumber": "+1234567890",
    "refreshToken": "randomRefreshTokenString",
    "resetPasswordExpires": "2024-12-31T00:00:00.000Z",
    "resetPasswordToken": "randomResetPasswordToken",
    "role": "admin",
    "ssn": "123-45-6789",
    "taxId": "ab123456c",
    "twitterHandle": "@instantbackend",
    "updatedAt": "2024-04-10T00:00:00.000Z",
    "websiteUrl": "https://www.instantbackend.com",
    "_id": "6617ea39c2db6703c1e72d6e",
    "createdAt": "2024-04-11T13:48:41.899Z",
    "__v": 0
  },
  "message": "User successfully created."
}
```

MongoDB automáticamente le asigna un \_id único al usuario creado.

Ahora, si vuelvo a hacer un Post con los mismos datos de recién, empiezan a saltar todas las restricciones de unicidad

```bash
{
  "response": "User with this email already exists",
  "status": 409,
  "message": "User with this email already exists",
  "name": "HttpException"
}
{
  "statusCode": 409,
  "message": "The cuit: 20-12345678-9 is already in use."
}
{
  "statusCode": 409,
  "message": "The dni: 12345678 is already in use."
}
{
  "statusCode": 409,
  "message": "The facebookId: instantbackend is already in use."
}
...
```

# Configurar campos requeridos

En el ejemplo anterior, hicimos un POST con todos los datos posibles, pero también se puede hacer con un único campo

```bash
{
 "email": "instant@backend.com"
}
```

y recibiremos una respuesta asi

```bash
{
  "user": {
    "email": "instant@backend.com",
    "isActive": true,
    "_id": "6617eb98c2db6703c1e72d7e",
    "createdAt": "2024-04-11T13:54:32.885Z",
    "updatedAt": "2024-04-11T13:54:32.885Z",
    "__v": 0
  },
  "message": "User successfully created."
}
```

Debido a como funciona MongoDB este es el esquema mas pequeño que se puede crear

## ¿Cómo se puede poner que un campo sea requerido?

Muy sencillo, simplemente vamos al archivo users.custom.schema.ts, el cual esta completamente comentado, con todas las configuraciones por defecto, entonces, si queremos que el nombre sea requerido, haremos lo siguiente

### Archivo users.custom.schema.ts (Resumen)

Estos valores viene por defecto

```bash
export class UserCustomBase extends UserBase {

  //@Prop({ required: false })
  //country?: string;

  //@Prop({ unique: true, sparse: true, required: false })
  //facebookId?: string;

  //@Prop({ required: false })
  //firstName?: string;

  //@Prop({ required: false })
  //lastName?: string;

}
```

Entonces, para hacerlos requeridos y que el backend responda ante esta petición, haremos lo siguiente

1. Descomentamos el @Prop que queremos modificar
2. Cambiamos {required: false} por {required: true}

quedando de esta manera

```bash
  @Prop({ required: true })
  country?: string;

  @Prop({ unique: true, sparse: true, required: true })
  facebookId?: string;

  @Prop({ required: true })
  firstName?: string;

  @Prop({ required: true })
  lastName?: string;
```

de esta manera, si enviamos una petición POST sin esos parámetros, recibiremos un error en el backend

```bash
{
 "email": "instant@backend.com"
}
```

Respuesta del servidor

```bash
{
  "message": "Validation failed",
  "errors": [
    "Path `lastName` is required.",
    "Path `firstName` is required.",
    "Path `facebookId` is required.",
    "Path `country` is required."
  ]
}
```

## Buscando usuarios mediante query

instant-backend soporta también la búsqueda de usuarios por parámetros en la URL, en este caso debemos modificar el endpoint de la siguiente manera

```bash
 http://localhost:3600/users/search?
```

Entonces, si hacemos lo siguiente

```bash
http://localhost:3600/users/search?email=instant@backend.com
```

nos devolverá si lo encuentra

```bash
{
  "users": [
    {
      "_id": "6617eb98c2db6703c1e72d7e",
      "email": "instant@backend.com",
      "isActive": true,
      "createdAt": "2024-04-11T13:54:32.885Z",
      "updatedAt": "2024-04-11T13:54:32.885Z",
      "__v": 0
    }
  ],
  "message": "Users found successfully with given query."
}
```

en caso de no encontrar, devolverá lo siguiente

```bash
{
  "message": "No users found with the given query."
}
```

también se pueden hacer querys mas avanzados de la siguiente manera

```bash
http://localhost:3600/users/search?email=instant@backend.com&firstName=Instant&lastName=Backend&company=Instant%20Backend%20Inc.&role=admin
```

nos devolverá al usuario con un mensaje de confirmación

```bash
{
  "users": [
    {
      "_id": "6617f0902e21d059a000b0a4",
      "address": "123 Instant-Backend",
      "bio": "Creator of instant-backend",
      "birthDate": "1995-10-04T00:00:00.000Z",
      "company": "Instant Backend Inc.",
      "country": "Internet",
      "cuit": "20-12345678-9",
      "dni": "12345678",
      "driverLicenseNumber": "b1234c567d",
      "email": "instant@backend.com",
      "employmentStatus": "Self-employed",
      "facebookId": "instantbackend",
      "facebookUrl": "https://www.facebook.com/instantbackend",
      "firstName": "Instant",
      "gender": "Backend",
      "githubId": "instant-backend",
      "githubUrl": "https://github.com/instant-backend",
      "googleId": "108204809480948029480",
      "instagramHandle": "@instantbackend",
      "isActive": true,
      "language": "EN",
      "lastName": "Backend",
      "linkedinId": "instant-backend",
      "linkedInUrl": "https://www.linkedin.com/in/instant-backend",
      "maritalStatus": "Single",
      "microsoftId": "instantbackend@outlook.com",
      "middleName": "Awesome",
      "nationality": "Internet Citizen",
      "occupation": "Developer",
      "passportNumber": "a12345678",
      "password": "securePassword123!",
      "phoneNumber": "+1234567890",
      "refreshToken": "randomRefreshTokenString",
      "resetPasswordExpires": "2024-12-31T00:00:00.000Z",
      "resetPasswordToken": "randomResetPasswordToken",
      "role": "admin",
      "ssn": "123-45-6789",
      "taxId": "ab123456c",
      "twitterHandle": "@instantbackend",
      "updatedAt": "2024-04-10T00:00:00.000Z",
      "websiteUrl": "https://www.instantbackend.com",
      "createdAt": "2024-04-11T14:15:44.984Z",
      "__v": 0
    }
  ],
  "message": "Users found successfully with given query."
}
```

# Conclusión

Este paquete lo que pretende es acelerar los procesos de creación de backend, ya que suelen ser tareas repetitivas y comunes, entonces, ¿Que mejor que automatizarlo y tenerlo normalizado, con todas las buenas practicas de la industria en apenas un solo comando?

# Feedback

Tu feedback es muy valioso. Ayuda a seguir mejorando y asegurar de que este paquete cumpla con tus expectativas. Puedes enviar tus comentarios a través de issues en GitHub o contactar directamente por LinkedIn a https://www.linkedin.com/in/ariel-eitner-414171225/
