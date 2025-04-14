import { IsEnum, IsNumber, IsPositive } from 'class-validator';
import { PresentacionBebida } from 'generated/prisma';
import { BebidaPresentacionList } from '../enum/bebida.enum';

export class CreateBebidaDto {
  @IsEnum(BebidaPresentacionList, {
    message: `Values valid are ${BebidaPresentacionList}`,
  })
  presentacion: PresentacionBebida;

  @IsNumber()
  @IsPositive()
  precio: number;

  @IsNumber()
  @IsPositive()
  tipoBebidaId: number;
}
