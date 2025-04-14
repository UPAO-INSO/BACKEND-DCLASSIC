import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateBebidaDto } from './dto/create-bebida.dto';
import { UpdateBebidaDto } from './dto/update-bebida.dto';
import { PrismaClient } from 'generated/prisma';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { TipoBebidaService } from 'src/tipo-bebida/tipo-bebida.service';

@Injectable()
export class BebidasService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('BebidasService');

  constructor(private readonly tipoBebidaService: TipoBebidaService) {
    super();
  }

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createBebidaDto: CreateBebidaDto) {
    await this.tipoBebidaService.findOne(createBebidaDto.tipoBebidaId);

    return await this.bebida.create({
      data: createBebidaDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    let { page, limit } = paginationDto;

    if (page === undefined || limit === undefined) {
      page = 1;
      limit = 10;
    }

    const totalPages = await this.bebida.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.bebida.findMany({
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
    const bebida = await this.bebida.findFirst({
      where: {
        id,
      },
    });

    if (!bebida) {
      throw new NotFoundException(`Bebida with id #${id} not found`);
    }

    return bebida;
  }

  async update(id: number, updateBebidaDto: UpdateBebidaDto) {
    await this.findOne(id);

    return this.bebida.update({
      where: { id },
      data: updateBebidaDto,
    });
  }

  async remove(id: number) {
    // return await this.bebida.delete({
    //   where: { id },
    // });

    const bebida = await this.findOne(id);
    return {
      message: 'bebida eliminada',
      bebida,
    };
  }
}
