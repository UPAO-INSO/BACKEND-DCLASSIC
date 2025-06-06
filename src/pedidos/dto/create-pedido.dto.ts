import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { EstadoPedido } from 'generated/prisma';

export class CreatePedidoDto {
  @IsNumber()
  @IsOptional()
  clienteId?: number;

  @IsOptional()
  @IsNumber()
  mesaId?: number;

  @IsNumber()
  @IsOptional()
  comprobanteId?: number;

  @IsNumber()
  empleadoId: number;

  @IsString()
  comentario: string;

  @IsString()
  @IsEnum(EstadoPedido, {
    message: `El estado del pedido debe ser ${Object.values(EstadoPedido).join(', ')}`,
  })
  estado: EstadoPedido;
}
