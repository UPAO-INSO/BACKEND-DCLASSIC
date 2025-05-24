import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Puesto } from 'src/empleados/enum/puesto.enum';

export class RegisterUserDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsEnum(Puesto, {
    message: `Values valid are ${Object.values(Puesto).join(', ')}`,
  })
  puesto: Puesto;

  @IsString()
  @IsStrongPassword()
  password: string;
}
