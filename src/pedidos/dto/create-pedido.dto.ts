import { IsInt, IsOptional, ValidateNested } from 'class-validator';
import { CreatePedidoTaperDto } from './create-pedido-taper.dto';
import { CreatePedidoEntradaDto } from './create-pedido-entrada.dto';
import { CreatePedidoBebidaDto } from './create-pedido-bebida.dto';
import { Type } from 'class-transformer';

export class CreatePedidoDto {
  @IsInt()
  mesaId: number;

  @IsOptional()
  @IsInt()
  clienteId?: number;

  @ValidateNested({ each: true })
  @Type(() => CreatePedidoBebidaDto)
  @IsOptional()
  pedidoBebidas?: CreatePedidoBebidaDto[];

  @ValidateNested({ each: true })
  @Type(() => CreatePedidoTaperDto)
  @IsOptional()
  pedidoTapers?: CreatePedidoTaperDto[];

  @ValidateNested({ each: true })
  @Type(() => CreatePedidoEntradaDto)
  @IsOptional()
  pedidoEntradas?: CreatePedidoEntradaDto[];
}
