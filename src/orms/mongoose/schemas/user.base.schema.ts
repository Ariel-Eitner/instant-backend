import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class UserBase {
  
    @Prop({required: false})
    address?: string;
  
    @Prop({required: false})
    bio?: string;
  
    @Prop({required: false})
    birthDate?: Date;
  
    @Prop({required: false})
    company?: string;
  
    @Prop({required: false})
    country?: string;
  
    @Prop({required: false})
    createdAt?: Date;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    cuitId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    dniId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    driverLicenseNumberId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    email?: string;
  
    @Prop({required: false})
    employmentStatus?: string;
  
    @Prop({required: false})
    experience?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    facebookId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    facebookUrl?: string;
  
    @Prop({required: false})
    field?: string;
  
    @Prop({required: false})
    firstName?: string;
  
    @Prop({required: false})
    gender?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    githubId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    githubUrl?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    googleId?: string;
  
    @Prop({required: false})
    industry?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    instagramHandleId?: string;
  
    @Prop({required: false})
    isActive?: boolean;
  
    @Prop({required: false})
    language?: string;
  
    @Prop({required: false})
    lastName?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    licenseNumberId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    linkedinId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    linkedInUrl?: string;
  
    @Prop({required: false})
    maritalStatus?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    microsoftId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    middleName?: string;
  
    @Prop({required: false})
    nationality?: string;
  
    @Prop({required: false})
    occupation?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    passportNumberId?: string;
  
    @Prop({required: false})
    password?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    phoneNumberId?: string;
  
    @Prop({required: false})
    refreshToken?: string;
  
    @Prop({required: false})
    resetPasswordExpires?: Date;
  
    @Prop({required: false})
    resetPasswordToken?: string;
  
    @Prop({required: false})
    role?: string;
  
    @Prop({required: false})
    specialty?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    ssnId?: string;
  
    @Prop({required: false})
    studies?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    taxId?: string;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    twitterHandleId?: string;
  
    @Prop({required: false})
    updatedAt?: Date;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    websiteUrl?: string;
}

export type UserBaseDocument = UserBase & Document;
const UserBaseSchema = SchemaFactory.createForClass(UserBase);

UserBaseSchema.pre("save", function(next) {
  if (this.isNew && true) {
    this.createdAt = new Date();
  }
  next();
});

UserBaseSchema.pre("findOneAndUpdate", function(next) {
  if (true) {
    this.set({ updatedAt: new Date() });
  }
  next();
});


export { UserBaseSchema };
