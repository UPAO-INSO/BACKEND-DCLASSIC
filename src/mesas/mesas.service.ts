import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { ChangeMesaStatusDto, CreateMesaDto, UpdateMesaDto } from './dto';
import { PrismaClient } from './../../generated/prisma';
import { PaginationDto } from './../common/dto/pagination.dto';

@Injectable()
export class MesasService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('MesasService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('MySQL connected');
  }

  async changeStatus(mesaStatus: ChangeMesaStatusDto) {
    const { id, estado } = mesaStatus;

    const mesa = await this.findOne(id);
    if (mesa.estado === estado) {
      return mesa;
    }

    return this.mesa.update({
      where: { id },
      data: {
        estado,
      },
    });
  }

  async findByNumber(mesaNumber: string) {
    const mesa = await this.mesa.findFirst({
      where: { numero: mesaNumber },
    });

    if (!mesa) {
      throw new BadRequestException(
        `Mesa with number #${mesaNumber} exists yet`,
      );
    }

    return mesa;
  }

  async create(createMesaDto: CreateMesaDto) {
    await this.findByNumber(createMesaDto.numero);
    return await this.mesa.create({
      data: createMesaDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    let { page, limit } = paginationDto;

    if (page === undefined || limit === undefined) {
      page = 1;
      limit = 10;
    }

    const totalPages = await this.mesa.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.mesa.findMany({
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

  async findOne(id: number) {
    const mesa = await this.mesa.findFirst({
      where: { id },
    });

    if (!mesa) {
      throw new NotFoundException(`Mesa with id #${id} not found`);
    }

    return mesa;
  }

  async update(id: number, updateMesaDto: UpdateMesaDto) {
    await this.findOne(id);

    return this.mesa.update({
      where: { id },
      data: updateMesaDto,
    });
  }

  async remove(id: number) {
    // return await this.mesa.delete({
    //   where: { id },
    // });

    const mesa = await this.findOne(id);
    return {
      message: 'mesa eliminada',
      mesa,
    };
  }
}
