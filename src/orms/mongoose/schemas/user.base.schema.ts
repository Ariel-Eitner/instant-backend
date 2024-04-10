import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class UserBase {
  @Prop({ unique: true, sparse: true, lowercase: true })
  email?: string;

  @Prop()
  password?: string;

  // Basic user information
  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  middleName?: string;

  @Prop()
  gender?: string;

  @Prop()
  birthDate?: Date;

  // Contact Details
  @Prop({ unique: true, sparse: true })
  phoneNumber?: string;

  @Prop()
  address?: string;

  // Professional information
  @Prop()
  occupation?: string;

  @Prop()
  company?: string;

  // Social Media
  @Prop({ unique: true, sparse: true })
  githubUrl?: string;

  @Prop({ unique: true, sparse: true })
  websiteUrl?: string;

  @Prop({ unique: true, sparse: true })
  twitterHandle?: string;

  @Prop({ unique: true, sparse: true })
  facebookUrl?: string;

  @Prop({ unique: true, sparse: true })
  linkedInUrl?: string;

  @Prop({ unique: true, sparse: true })
  instagramHandle?: string;

  // Additional fields based on extended interface
  @Prop({ unique: true, sparse: true, lowercase: true })
  facebookId?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  githubId?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  googleId?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  linkedinId?: string;

  @Prop({ unique: true, sparse: true, lowercase: true })
  microsoftId?: string;

  @Prop()
  refreshToken?: string;

  @Prop()
  resetPasswordToken?: string;

  @Prop()
  resetPasswordExpires?: Date;

  @Prop()
  language?: string;

  @Prop()
  bio?: string;

  @Prop()
  country?: string;

  @Prop({ default: true })
  isActive?: boolean;

  @Prop({ default: Date.now })
  createdAt?: Date;

  @Prop({ default: Date.now })
  updatedAt?: Date;
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
