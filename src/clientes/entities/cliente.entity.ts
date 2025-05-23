import { Persona } from 'src/personas/entities/persona.entity';

export class Cliente extends Persona {
  client_id: number;
  correo: number;
  personaId: number;
}
