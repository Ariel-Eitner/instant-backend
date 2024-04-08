import { UserBase } from '@ariel-eitner/instant-backend';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users' })
export class UserCustomBase extends UserBase {
  //@Prop({ unique: false, sparse: false, lowercase: false, required: false })
  //email?: string;
  //@Prop({ required: false })
  //password?: string;
  // Basic user information
  //@Prop({ required: false })
  //firstName?: string;
  //@Prop({ required: false })
  //lastName?: string;
  //@Prop({ required: false })
  //middleName?: string;
  //@Prop({ required: false })
  //gender?: string;
  //@Prop({ required: false })
  //birthDate?: Date;
  // Contact Details
  //@Prop({ unique: false, sparse: false, required: false })
  //phoneNumber?: string;
  //@Prop({ required: false })
  //address?: string;
  // Professional information
  //@Prop({ required: false })
  //occupation?: string;
  //@Prop({ required: false })
  //company?: string;
  // Social Media
  //@Prop({ unique: false, sparse: false, required: false })
  //githubUrl?: string;
  //@Prop({ unique: false, sparse: false, required: false })
  //websiteUrl?: string;
  //@Prop({ unique: false, sparse: false, required: false })
  //twitterHandle?: string;
  //@Prop({ unique: false, sparse: false, required: false })
  //facebookUrl?: string;
  //@Prop({ unique: false, sparse: false, required: false })
  //linkedInUrl?: string;
  //@Prop({ unique: false, sparse: false, required: false })
  //instagramHandle?: string;
  // Others
  //@Prop({ required: false })
  //bio?: string;
  //@Prop({ default: true, required: false })
  //isActive?: boolean;
  //@Prop({ default: Date.now, required: false })
  //createdAt?: Date;
  //@Prop({ default: Date.now, required: false })
  //updatedAt?: Date;
  // Example additional field
  //@Prop({ required: false })
  //hobby?: string;
}

export type UserCustomDocument = UserCustomBase & Document;

export const UserCustomSchema = SchemaFactory.createForClass(UserCustomBase);
