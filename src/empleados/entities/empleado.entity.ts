import { Persona } from 'src/personas/entities/persona.entity';

export class Empleado extends Persona {
  empleado_id: number;
  salario: number;
}
