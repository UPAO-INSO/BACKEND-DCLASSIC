import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import {
  PresentacionBebida,
  PresentacionTaper,
  TipoProducto,
} from 'generated/prisma';
import {
  PresentacionBebidaList,
  PresentacionTaperList,
  TipoProductoList,
} from 'src/products/enum/pedido.enum';

export class CreateProductDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @Min(0)
  @Type(() => Number)
  precio: number;

  @IsEnum(TipoProductoList, {
    message: `Valid type products are ${TipoProductoList}`,
  })
  TipoProducto?: TipoProducto;

  @IsOptional()
  @IsEnum(PresentacionBebidaList, {
    message: `Valid presentation bebida are ${PresentacionBebidaList}`,
  })
  presentacionBebida?: PresentacionBebida;

  @IsOptional()
  @IsEnum(PresentacionTaperList, {
    message: `Valid presentation taper are ${PresentacionTaperList}`,
  })
  presentacionTaper?: PresentacionTaper;
}
