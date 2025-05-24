import {
  Injectable,
  InternalServerErrorException,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from './../../generated/prisma';
import { CreateTipoProductDto } from './dto/create-tipo-product.dto';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductsService');

  async onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createProductDto: CreateProductDto) {
    try {
      return await this.producto.create({
        data: createProductDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Error creating product',
        error.message,
      );
    }
  }

  async createTipo(createTipoProductDto: CreateTipoProductDto) {
    try {
      return await this.tipoProducto.create({
        data: createTipoProductDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Error creating product type',
        error.message,
      );
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
