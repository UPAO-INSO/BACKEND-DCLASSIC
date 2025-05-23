import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';

export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  createdAt: Date;
  updatedAt: Date;

  cliente?: Cliente;
  empleado?: Empleado;
}
