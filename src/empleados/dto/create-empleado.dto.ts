import { IsNumber } from 'class-validator';
import { CreatePersonaDto } from 'src/personas/dto/create-persona.dto';

export class CreateEmpleadoDto {
  @IsNumber()
  salario: number;
  @IsNumber()
  rolId: number;
  @IsNumber()
  personaId: number;
}
