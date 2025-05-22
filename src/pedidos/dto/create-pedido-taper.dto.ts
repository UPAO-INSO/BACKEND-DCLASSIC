import { IsNumber, IsPositive } from 'class-validator';

export class CreatePedidoTaperDto {
  @IsNumber()
  @IsPositive()
  taperId: number;
  @IsNumber()
  @IsPositive()
  cantidad: number;
}
