import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class EmpleadosService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('EmpleadosService');

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    return await this.empleado.create({
      data: createEmpleadoDto,
    });
  }

  findAll() {
    return `This action returns all empleados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
