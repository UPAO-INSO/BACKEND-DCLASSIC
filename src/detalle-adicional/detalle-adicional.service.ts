import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateDetalleAdicionalDto } from './dto/create-detalle-adicional.dto';
import { UpdateDetalleAdicionalDto } from './dto/update-detalle-adicional.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DetalleAdicionalService
  extends PrismaClient
  implements OnModuleInit
{
  onModuleInit() {
    this.$connect();
  }

  create(createDetalleAdicionalDto: CreateDetalleAdicionalDto) {
    return 'This action adds a new detalleAdicional';
  }

  findAll() {
    return `This action returns all detalleAdicional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleAdicional`;
  }

  update(id: number, updateDetalleAdicionalDto: UpdateDetalleAdicionalDto) {
    return `This action updates a #${id} detalleAdicional`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleAdicional`;
  }
}
