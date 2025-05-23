import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PrismaClient } from '../../generated/prisma/index';

@Injectable()
export class PersonasService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('PersonasService');

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  create(createPersonaDto: CreatePersonaDto) {
    return this.persona.create({
      data: createPersonaDto,
    });
  }

  findAll() {
    return `This action returns all personas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
