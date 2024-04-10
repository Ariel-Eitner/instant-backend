# @ariel-eitner/instant-backend

instant-backend is a solution for creating super fast endpoints, with normalized and secured data

## Características

- Enumera las características principales de tu paquete.
- Menciona cualquier característica única o punto de venta.

## Requisitos previos

Lista cualquier requisito previo necesario para usar tu paquete, como versiones específicas de Node.js, npm, o cualquier otro software o dependencias.

## Instalación

Proporciona comandos claros y concisos sobre cómo instalar tu paquete.

```bash
npm install @ariel-eitner/instant-backend
```

# Uso Basico

ejecutar el comando en la consola para que funcione

```bash
npx instant-backend users
```

esto creara una carpeta src/users con todos los componentes para poder usar los modulos de users sin tener que ajustar los props automaticamente

## Flags

puedes correr el siguiente comando para importar automaticamente en el app.module.ts de NestJS

```bash
npx instant-backend users --import
```

esto genera las siguientes importaciones en el codigo en app module, sin sobrescribir el codigo existente

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

en la siguiente interfaz estan representados todos los campos que se pueden usar en users, esto a su vez es expandible en los archivos .custom

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

tambien siguiendo buenas practicas, el campo role tiene un enum que viene de el siguiente esquema

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
  "provider",
  "stakeholder",
  "subscriber",
  "tester",
  "user",
  "volunteer",
];
```

## Restricciones

este paquete maneja de forma nativa restricciones de unicidad, esto es, que el campo email sea unico e irrepetible, los id, paginas web, redes sociales, para evitar registros duplicados, este es el schema base del cual se toman los valores, ademas, maneja automaticamente la fecha de creacion y update de un usuario, para que los campos se generen automaticamente

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
