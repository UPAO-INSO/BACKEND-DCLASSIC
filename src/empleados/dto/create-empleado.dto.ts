import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Puesto } from '../enum/puesto.enum';

export class CreateEmpleadoDto {
  @IsNumber()
  salario: number;

  @IsNumber()
  rolId: number;

  @IsNumber()
  personaId: number;

  @IsString()
  @IsEnum(Puesto, {
    message: `Values valid are ${Object.values(Puesto).join()}`,
  })
  puesto: Puesto;
}
