import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PrismaClient } from './../../generated/prisma/index';
import { CreatePersonaFullDto } from './dto/create-persona-full.dto';

@Injectable()
export class PersonasService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('PersonasService');

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  create(createPersonaDto: CreatePersonaDto) {
    const { nombre, apellido, telefono } = createPersonaDto;

    const existing = this.persona.findFirst({
      where: { telefono, nombre, apellido },
    });

    if (!existing) throw new BadRequestException('Persona ya existe');

    return this.persona.create({
      data: createPersonaDto,
    });
  }

  async createFull(data: CreatePersonaFullDto) {
    const persona = await this.persona.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono || '',
        empleado: {
          create: {
            salario: data.salario,
            puesto: {
              connect: { id: data.puestoId },
            },
            usuario: {
              create: {
                email: data.usuario.email,
                username: data.usuario.username,
                password: data.usuario.password,
                refreshToken: '',
                role: data.usuario.role,
              },
            },
          },
        },
      },
      include: {
        empleado: {
          include: {
            usuario: true,
            puesto: true,
          },
        },
      },
    });

    return persona;
  }

  findAll() {
    return `This action returns all personas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
