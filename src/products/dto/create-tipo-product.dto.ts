import { IsString } from 'class-validator';

export class CreateTipoProductDto {
  @IsString()
  nombre: string;
}
