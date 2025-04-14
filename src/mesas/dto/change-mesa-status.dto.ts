import { IsEnum, IsNumber } from 'class-validator';
import { MesaStatusList } from '../enum/mesa.enum';
import { EstadoMesa } from 'generated/prisma';

export class ChangeMesaStatusDto {
  @IsNumber()
  id: number;
  @IsEnum(MesaStatusList, {
    message: `Valid status are ${MesaStatusList}`,
  })
  estado: EstadoMesa;
}
