import {
  IsEmail,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
  ValidateIf,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  middleName?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  birthDate?: Date;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  occupation?: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsString()
  @IsOptional()
  githubUrl?: string;

  @IsString()
  @IsOptional()
  websiteUrl?: string;

  @IsString()
  @IsOptional()
  twitterHandle?: string;

  @IsString()
  @IsOptional()
  facebookUrl?: string;

  @IsString()
  @IsOptional()
  linkedInUrl?: string;

  @IsString()
  @IsOptional()
  instagramHandle?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  googleId?: string;

  @IsString()
  @IsOptional()
  facebookId?: string;

  @IsString()
  @IsOptional()
  githubId?: string;

  @IsString()
  @IsOptional()
  linkedinId?: string;

  @IsString()
  @IsOptional()
  microsoftId?: string;

  @IsString()
  @IsOptional()
  refreshToken?: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  resetPasswordExpires?: Date;

  @IsString()
  @IsOptional()
  resetPasswordToken?: string;

  @ValidateIf((o) => o.language !== undefined)
  @IsNotEmpty()
  @IsString()
  language?: string;
}
