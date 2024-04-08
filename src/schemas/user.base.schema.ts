import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

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

  // Others
  @Prop()
  bio?: string;

  @Prop({ default: true })
  isActive?: boolean;

  @Prop({ default: Date.now })
  createdAt?: Date;

  @Prop({ default: Date.now })
  updatedAt?: Date;

  // Aquí puedes añadir más campos según sea necesario
}

export type UserBaseDocument = UserBase & Document;

export const UserBaseSchema = SchemaFactory.createForClass(UserBase);
