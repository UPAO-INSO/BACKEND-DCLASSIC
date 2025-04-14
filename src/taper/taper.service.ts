import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTaperDto } from './dto/create-taper.dto';
import { UpdateTaperDto } from './dto/update-taper.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TaperService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  create(createTaperDto: CreateTaperDto) {
    return 'This action adds a new taper';
  }

  findAll() {
    return `This action returns all taper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taper`;
  }

  update(id: number, updateTaperDto: UpdateTaperDto) {
    return `This action updates a #${id} taper`;
  }

  remove(id: number) {
    return `This action removes a #${id} taper`;
  }
}
