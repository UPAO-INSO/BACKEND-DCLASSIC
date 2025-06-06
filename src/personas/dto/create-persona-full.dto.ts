import { Role } from 'generated/prisma';

export interface CreatePersonaFullDto {
  nombre: string;
  apellido: string;
  telefono?: string;
  puestoId: number;
  salario: number;
  usuario: {
    email: string;
    username: string;
    password: string;
    role: Role; // importa Role del enum correspondiente
  };
}
