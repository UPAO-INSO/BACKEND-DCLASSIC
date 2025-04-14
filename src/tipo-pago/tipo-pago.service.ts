import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TipoPagoService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  create(createTipoPagoDto: CreateTipoPagoDto) {
    return 'This action adds a new tipoPago';
  }

  findAll() {
    return `This action returns all tipoPago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoPago`;
  }

  update(id: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    return `This action updates a #${id} tipoPago`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoPago`;
  }
}
