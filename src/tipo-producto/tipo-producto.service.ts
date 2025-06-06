import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TipoProductoService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('Tipo-ProductsService');

  async onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createTipoProductoDto: CreateTipoProductoDto) {
    const exist = await this.findByName(createTipoProductoDto.nombre);

    if (exist) throw new BadRequestException('El tipo de producto ya existe');

    return await this.tipoProducto.create({
      data: createTipoProductoDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalPages = await this.tipoProducto.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.tipoProducto.findMany({
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

  async findByName(nombre: string) {
    return await this.tipoProducto.findFirst({
      where: { nombre },
    });
  }

  async findOne(id: number) {
    const tipoProducto = await this.tipoProducto.findFirst({
      where: { id },
    });

    if (!tipoProducto) {
      throw new NotFoundException(`TipoProducto with id #${id} was not found`);
    }

    return tipoProducto;
  }

  async update(id: number, updateTipoProductoDto: UpdateTipoProductoDto) {
    await this.findOne(id);

    return this.tipoProducto.update({
      where: { id },
      data: updateTipoProductoDto,
    });
  }

  async remove(id: number) {
    const tipoProducto = await this.findOne(id);
    return {
      message: 'mesa eliminada',
      tipoProducto,
    };
  }
}
