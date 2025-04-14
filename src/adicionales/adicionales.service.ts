import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateAdicionaleDto } from './dto/create-adicionale.dto';
import { UpdateAdicionaleDto } from './dto/update-adicionale.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class AdicionalesService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  create(createAdicionaleDto: CreateAdicionaleDto) {
    return 'This action adds a new adicionale';
  }

  findAll() {
    return `This action returns all adicionales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adicionale`;
  }

  update(id: number, updateAdicionaleDto: UpdateAdicionaleDto) {
    return `This action updates a #${id} adicionale`;
  }

  remove(id: number) {
    return `This action removes a #${id} adicionale`;
  }
}
