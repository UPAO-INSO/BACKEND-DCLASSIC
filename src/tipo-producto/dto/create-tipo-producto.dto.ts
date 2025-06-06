import { IsEnum, IsString } from 'class-validator';
import { TipoProducto } from '../enum/tipo-producto.enum';

export class CreateTipoProductoDto {
  @IsString()
  @IsEnum(TipoProducto, {
    message: `El tipo de producto debe ser ${Object.values(TipoProducto).join(', ')}`,
  })
  nombre: TipoProducto;
}
