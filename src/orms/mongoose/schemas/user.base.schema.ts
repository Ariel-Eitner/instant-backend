import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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

  @Prop()
  cuit?: string;

  @Prop()
  dni?: string;

  @Prop()
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

  @Prop()
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

  @Prop()
  ssn?: string;

  @Prop()
  taxId?: string;

  @Prop({ unique: true, sparse: true })
  twitterHandle?: string;

  @Prop({ default: Date.now })
  updatedAt?: Date;

  @Prop({ unique: true, sparse: true })
  websiteUrl?: string;
}

export type UserBaseDocument = UserBase & Document;

const UserBaseSchema = SchemaFactory.createForClass(UserBase);

// Middleware para manejar createdAt y updatedAt
UserBaseSchema.pre("save", function (next) {
  if (this.isNew) {
    this.createdAt = new Date();
  }
  next();
});

UserBaseSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

export { UserBaseSchema };
