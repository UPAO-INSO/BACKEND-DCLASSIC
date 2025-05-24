import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaClient } from './../../generated/prisma';
import { PaginationDto } from './../common/dto/pagination.dto';
import { Puesto } from 'src/empleados/enum/puesto.enum';

@Injectable()
export class RolesService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('RolesService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createRoleDto: CreateRoleDto) {
    const { nombre } = createRoleDto;

    const existing = await this.rol.findFirst({
      where: { nombre },
    });

    if (existing) throw new BadRequestException('Rol ya existe');

    return await this.rol.create({
      data: createRoleDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalPages = await this.rol.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.rol.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      meta: {
        total: totalPages,
        page,
        lastPage,
      },
    };
  }

  async findByNombre(nombre: Puesto) {
    const rol = await this.rol.findFirst({
      where: {
        nombre,
      },
    });

    if (!rol) throw new NotFoundException('Rol was not found');

    return rol;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
