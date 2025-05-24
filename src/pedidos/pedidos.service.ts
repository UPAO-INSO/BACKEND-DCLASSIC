import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaClient } from './../../generated/prisma';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PedidosService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('PedidosService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createPedidoDto: CreatePedidoDto) {
    // return this.pedido.create({
    //   data: createPedidoDto,
    // });
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { page, limit } = paginationDto;

      const totalPages = await this.rol.count();
      const lastPage = Math.ceil(totalPages / limit);

      return {
        data: await this.pedido.findMany({
          skip: (page - 1) * limit,
          take: limit,
        }),
        meta: {
          total: totalPages,
          page,
          lastPage,
        },
      };
    } catch (error) {
      console.log;
      throw new NotFoundException('No se encontraron pedidos', error.message);
    }
  }

  async findOne(id: number) {
    const pedido = await this.pedido.findFirst({
      where: { id },
    });

    if (!pedido) throw new NotFoundException(`Pedido with id #${id} not found`);

    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    // await this.findOne(id);
    // return this.pedido.update({
    //   where: { id },
    //   data: updatePedidoDto,
    // });
  }

  async remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
