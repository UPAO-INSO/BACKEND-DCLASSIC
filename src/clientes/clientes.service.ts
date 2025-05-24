import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaClient } from './../../generated/prisma';

@Injectable()
export class ClientesService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ClientesService');

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }
  create(createClienteDto: CreateClienteDto) {
    // return this.cliente.create({
    //   data: createClienteDto,
    // });
  }

  findAll() {
    return `This action returns all clientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
