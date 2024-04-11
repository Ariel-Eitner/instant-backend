import { UserBase, roles } from '@ariel-eitner/instant-backend';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users' })
export class UserCustomBase extends UserBase {
  //@Prop({ required: false })
  //address?: string;

  //@Prop({ required: false })
  //bio?: string;

  //@Prop({ required: false })
  //birthDate?: Date;

  //@Prop({ required: false })
  //company?: string;

  //@Prop({ required: false })
  //country?: string;

  //@Prop({ default: Date.now, required: false })
  //createdAt?: Date;

  //@Prop({ unique: true, sparse: true, lowercase: true ,required: false})
  //cuit?: string;

  //@Prop({ unique: true, sparse: true, lowercase: true ,required: false})
  //dni?: string;

  //@Prop({ unique: true, sparse: true, lowercase: true ,required: false})
  //driverLicenseNumber?: string;

  //@Prop({ unique: true, sparse: true, lowercase: true, required: false }) 
  //email?: string;

  //@Prop({required: false})
  //employmentStatus?: string;

  //@Prop({ required: false })
  //experience?: string;

  //@Prop({ unique: true, sparse: true, required: false })
  //facebookId?: string;
  
  //@Prop({ unique: true, sparse: true, required: false }) 
  //facebookUrl?: string;

  //@Prop({ required: false })
  //field?: string;

  //@Prop({ required: false })
  //firstName?: string;

  //@Prop({ required: false })
  //gender?: string;

  //@Prop({ unique: true, sparse: true, required: false }) 
  //githubId?: string;

  //@Prop({ unique: true, sparse: true, required: false }) 
  //githubUrl?: string;

  //@Prop({ unique: true, sparse: true, required: false })
  //googleId?: string;

  //@Prop({ required: false })
  //industry?: string;

  //@Prop({ unique: true, sparse: true, required: false }) 
  //instagramHandle?: string;

  //@Prop({ default: true, required: false })
  //isActive?: boolean;

  //@Prop({required: false})
  //language?: string;

  //@Prop({ required: false })
  //lastName?: string;

  //@Prop({ required: false })
  //licenseNumber?: string;

  //@Prop({ unique: true, sparse: true, required: false })
  //linkedInId?: string;

  //@Prop({ unique: true, sparse: true, required: false })
  //linkedInUrl?: string;

  //@Prop({required: false})
  //maritalStatus?: string;

  //@Prop({ unique: true, sparse: true, required: false })
  //microsoftId?: string;

  //@Prop({ required: false })
  //middleName?: string;

  //@Prop({required: false})
  //nationality?: string;

  //@Prop({ required: false })
  //occupation?: string;

  //@Prop({ unique: true, sparse: true, lowercase: true, required: false})
  //passportNumber?: string;

  //@Prop({ required: false })
  //password?: string;

  //@Prop({ unique: true, sparse: true, required: false }) 
  //phoneNumber?: string;

  //@Prop({ required: false })
  //refreshToken?: string;

  //@Prop({ required: false })
  //resetPasswordExpires?: Date;

  //@Prop({ required: false })
  //resetPasswordToken?: string;

  //@Prop({ enum: roles, required: false })
  //role?: string;

  //@Prop({ unique: true, sparse: true, lowercase: true, required: false})
  //ssn?: string;
  
  //@Prop({ unique: true, sparse: true, lowercase: true, required: false})
  //taxId?: string;
  
  //@Prop({ unique: true, sparse: true, required: false }) 
  //twitterHandle?: string; 

  //@Prop({ default: Date.now, required: false })
  //updatedAt?: Date;
  
  //@Prop({ unique: true, sparse: true, required: false }) 
  //websiteUrl?: string;





  
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