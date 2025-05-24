import { IsNumber, IsString } from 'class-validator';

export class CreateMesaDto {
  @IsString()
  numero: string;
  @IsString()
  capacidad: string;
  @IsNumber()
  piso: number;
}
