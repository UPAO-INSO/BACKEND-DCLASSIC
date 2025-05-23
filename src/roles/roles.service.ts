import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaClient } from 'generated/prisma';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class RolesService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('RolesService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('MySQL connected');
  }

  create(createRoleDto: CreateRoleDto) {
    return this.rol.create({
      data: createRoleDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { page, limit } = paginationDto;

      const totalPages = await this.rol.count();
      const lastPage = Math.ceil(totalPages / limit);

      return {
        data: await this.rol.findMany({
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
      this.logger.error('Error fetching roles', error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
