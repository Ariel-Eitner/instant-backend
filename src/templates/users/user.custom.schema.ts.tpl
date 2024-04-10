import { UserBase } from '@ariel-eitner/instant-backend';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users' })
export class UserCustomBase extends UserBase {
  //@Prop({ unique: true, sparse: true, lowercase: true, required: false }) 
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
  //@Prop({ unique: true, sparse: true, required: false }) 
  //phoneNumber?: string;
  
  //@Prop({ required: false })
  //address?: string;
  
  // Professional information
  //@Prop({ required: false })
  //occupation?: string;
  
  //@Prop({ required: false })
  //company?: string;

  //@Prop({ required: false })
  //country?: string;


  
  // Social Media
  //@Prop({ unique: true, sparse: true, required: false }) 
  //githubUrl?: string;
  
  //@Prop({ unique: true, sparse: true, required: false }) 
  //websiteUrl?: string;
  
  //@Prop({ unique: true, sparse: true, required: false }) 
  //twitterHandle?: string;
  
  //@Prop({ unique: true, sparse: true, required: false }) 
  //facebookUrl?: string;
  
  //@Prop({ unique: true, sparse: true, required: false })
  //linkedInUrl?: string;
  
  //@Prop({ unique: true, sparse: true, required: false }) 
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
  
  // Authentication-related fields
  //@Prop({ unique: true, sparse: true, required: false })
  //googleId?: string;
  
  //@Prop({ unique: true, sparse: true, required: false })
  //facebookId?: string;
  
  //@Prop({ unique: true, sparse: true, required: false })
  //microsoftId?: string;
  
  //@Prop({ unique: true, sparse: true, required: false })
  //linkedinId?: string;
  
  //@Prop({ unique: true, sparse: true, required: false })
  //githubId?: string;
  
  //@Prop({ required: false })
  //refreshToken?: string;
  
  //@Prop({ required: false })
  //resetPasswordToken?: string;
  
  //@Prop({ required: false })
  //resetPasswordExpires?: Date;
  
  // Example additional field
  //@Prop({ required: false })
  //hobby?: string;
}

export type UserCustomDocument = UserCustomBase & Document;




const UserCustomSchema = SchemaFactory.createForClass(UserCustomBase);

UserCustomSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = new Date();
  }
  next();
});

UserCustomSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

export { UserCustomSchema };