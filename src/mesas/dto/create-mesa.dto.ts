import { IsNumber, IsString } from 'class-validator';

export class CreateMesaDto {
  @IsString()
  numero: string;
  @IsNumber()
  capacidad: number;
}
