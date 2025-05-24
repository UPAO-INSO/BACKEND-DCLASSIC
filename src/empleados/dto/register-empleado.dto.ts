import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsEmail,
  MinLength,
  IsEnum,
} from 'class-validator';
import { Role } from './../../../generated/prisma';

export class RegisterEmpleadoDto {
  // Datos de persona
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  // Datos del empleado
  @IsNotEmpty()
  @IsNumber()
  salario: number;

  @IsNotEmpty()
  @IsNumber()
  rolId: number;

  // Datos del usuario
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(Role, {
    message: `Role must be one of the following: ${Object.values(Role).join(', ')}`,
  })
  role?: Role = Role.USER; // Default a USER si no se envía
}
