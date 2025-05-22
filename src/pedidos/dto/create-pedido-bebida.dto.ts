import { IsNumber, IsPositive } from 'class-validator';

export class CreatePedidoBebidaDto {
  @IsNumber()
  @IsPositive()
  bebidaId: number;
  @IsNumber()
  @IsPositive()
  cantidad: number;
}
