import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateTipoBebidaDto } from './dto/create-tipo-bebida.dto';
import { UpdateTipoBebidaDto } from './dto/update-tipo-bebida.dto';
import { PrismaClient } from 'generated/prisma';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class TipoBebidaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('TipoBebidaService');

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createTipoBebidaDto: CreateTipoBebidaDto) {
    return await this.tipoBebida.create({
      data: createTipoBebidaDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    let { page, limit } = paginationDto;

    if (page === undefined || limit === undefined) {
      page = 1;
      limit = 10;
    }

    const totalPages = await this.tipoBebida.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.tipoBebida.findMany({
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
    const tipoBebida = await this.tipoBebida.findFirst({
      where: {
        id,
      },
    });

    if (!tipoBebida) {
      throw new NotFoundException(`TipoBebida with id #${id} not found`);
    }

    return tipoBebida;
  }

  async update(id: number, updateTipoBebidaDto: UpdateTipoBebidaDto) {
    await this.findOne(id);

    return this.tipoBebida.update({
      where: {
        id,
      },
      data: updateTipoBebidaDto,
    });
  }

  async remove(id: number) {
    // return this.tipoBebida.delete({
    //   where: {
    //     id,
    //   },
    // });

    const bebida = await this.findOne(id);

    return {
      message: 'TipoBebida eliminada',
      bebida,
    };
  }
}
