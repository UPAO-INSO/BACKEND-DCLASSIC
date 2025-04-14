import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from 'generated/prisma';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  email: string;
  @IsStrongPassword()
  password: string;
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(Role, {
    message: `Role must be one of the following: ${Object.values(Role).join(', ')}`,
  })
  role?: Role;
}
