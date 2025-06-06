import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Puesto } from '../enum/puesto.enum';

export class CreateEmpleadoDto {
  @IsNumber()
  salario: number;

  @IsNumber()
  puestoId: number;

  @IsNumber()
  usuarioId: number;
}
