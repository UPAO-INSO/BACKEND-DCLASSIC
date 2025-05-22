import { IsNumber, IsPositive } from 'class-validator';

export class CreatePedidoEntradaDto {
  @IsNumber()
  @IsPositive()
  entradaId: number;
  @IsNumber()
  @IsPositive()
  cantidad: number;
}
