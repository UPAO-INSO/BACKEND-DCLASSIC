import { IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  name: string;
  @IsString()
  dni: string;
  @IsString()
  telefono: string;
  @IsString()
  email: string;
}
