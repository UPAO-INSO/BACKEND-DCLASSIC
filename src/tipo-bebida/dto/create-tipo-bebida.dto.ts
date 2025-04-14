import { IsEnum } from 'class-validator';
import { TipoBebidaList } from 'generated/prisma';
import { BebidaTipoList } from '../enum/tipo-bebida.enum';

export class CreateTipoBebidaDto {
  @IsEnum(BebidaTipoList, {
    message: `Values valid are ${BebidaTipoList}`,
  })
  nombre: TipoBebidaList;
}
