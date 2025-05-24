import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateComprobanteDto } from './dto/create-comprobante.dto';
import { UpdateComprobanteDto } from './dto/update-comprobante.dto';
import { PrismaClient } from './../../generated/prisma';

@Injectable()
export class ComprobantesService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ComprobantesService');

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }
  create(createComprobanteDto: CreateComprobanteDto) {
    return 'This action adds a new comprobante';
  }

  findAll() {
    return `This action returns all comprobantes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comprobante`;
  }

  update(id: number, updateComprobanteDto: UpdateComprobanteDto) {
    return `This action updates a #${id} comprobante`;
  }

  remove(id: number) {
    return `This action removes a #${id} comprobante`;
  }
}
