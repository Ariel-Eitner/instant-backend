import { UserBase } from '@ariel-eitner/instant-backend';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users' })
export class UserCustomBase extends UserBase {
  //@Prop({ unique: true, sparse: true, lowercase: true })
  //email?: string;
  //@Prop()
  //password?: string;
  // Basic user information
  //@Prop()
  //firstName?: string;
  //@Prop()
  //lastName?: string;
  //@Prop()
  //middleName?: string;
  //@Prop()
  //gender?: string;
  //@Prop()
  //birthDate?: Date;
  // Contact Details
  //@Prop({ unique: true, sparse: true })
  //phoneNumber?: string;
  //@Prop()
  //address?: string;
  // Professional information
  //@Prop()
  //occupation?: string;
  //@Prop()
  //company?: string;
  // Social Media
  //@Prop({ unique: true, sparse: true })
  //githubUrl?: string;
  //@Prop({ unique: true, sparse: true })
  //websiteUrl?: string;
  //@Prop({ unique: true, sparse: true })
  //twitterHandle?: string;
  //@Prop({ unique: true, sparse: true })
  //facebookUrl?: string;
  //@Prop({ unique: true, sparse: true })
  //linkedInUrl?: string;
  //@Prop({ unique: true, sparse: true })
  //instagramHandle?: string;
  // Others
  //@Prop()
  //bio?: string;
  //@Prop({ default: true })
  //isActive?: boolean;
  //@Prop({ default: Date.now })
  //createdAt?: Date;
  //@Prop({ default: Date.now })
  //updatedAt?: Date;
  // Authentication-related fields
  //@Prop({ unique: true, sparse: true })
  //googleId?: string;
  //@Prop({ unique: true, sparse: true })
  //facebookId?: string;
  //@Prop({ unique: true, sparse: true })
  //microsoftId?: string;
  //@Prop({ unique: true, sparse: true })
  //linkedinId?: string;
  //@Prop({ unique: true, sparse: true })
  //githubId?: string;
  //@Prop()
  //refreshToken?: string;
  //@Prop()
  //resetPasswordToken?: string;
  //@Prop()
  //resetPasswordExpires?: Date;
  // Example additional field
  //@Prop()
  //hobby?: string;
}

export type UserCustomDocument = UserCustomBase & Document;

export const UserCustomSchema = SchemaFactory.createForClass(UserCustomBase);
