import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';
import { PrismaClient } from './../../generated/prisma';
import { PaginationDto } from './../common/dto/pagination.dto';

@Injectable()
export class RolesService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('RolesService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createPuestoDto: CreatePuestoDto) {
    const { nombre } = createPuestoDto;

    const existing = await this.findByNombre(nombre);

    if (existing) throw new BadRequestException('Puesto already exists');

    return await this.puesto.create({
      data: createPuestoDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalPages = await this.puesto.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.puesto.findMany({
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

  async findByNombre(nombre: string) {
    return await this.puesto.findFirst({
      where: {
        nombre,
      },
    });
  }

  async findOne(id: number) {
    const puesto = await this.puesto.findFirst({
      where: { id },
    });

    if (!puesto) throw new NotFoundException('Puesto was not found');

    return puesto;
  }

  async update(id: number, updatePuestoDto: UpdatePuestoDto) {
    await this.findOne(id);

    return await this.puesto.update({
      where: { id },
      data: updatePuestoDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
