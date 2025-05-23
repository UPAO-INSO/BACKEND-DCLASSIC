import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString, Min } from 'class-validator';

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

  @IsBoolean()
  habilitado: boolean;

  @IsBoolean()
  disponible: boolean;

  @IsNumber()
  tipoProductoId: number;
}
