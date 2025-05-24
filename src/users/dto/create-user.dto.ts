import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';
import { Role } from './../../../generated/prisma';
import { Puesto } from 'src/empleados/enum/puesto.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  @Length(10)
  phone?: string;

  @IsString()
  username: string;

  @IsString()
  @IsEnum(Puesto, {
    message: `Values valid are ${Object.values(Puesto).join(', ')}`,
  })
  puesto: Puesto;

  @IsEmail()
  @IsString()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsNumber()
  empleadoId?: number;

  @IsOptional()
  @IsEnum(Role, {
    message: `Role must be one of the following: ${Object.values(Role).join(', ')}`,
  })
  role?: Role = Role.USER;
}
