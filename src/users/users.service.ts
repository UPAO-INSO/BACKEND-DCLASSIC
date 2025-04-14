import {
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient, Role } from 'generated/prisma';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }

  async create(createUserDto: CreateUserDto) {
    const { email, password, name } = createUserDto;

    const existing = await this.user.findUnique({ where: { email } });
    if (existing) throw new ConflictException('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(password, 10);

    const totalUsers = await this.user.count();
    const role = totalUsers === 0 ? Role.ADMIN : Role.EMPLEADO;

    return this.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });
  }

  async findAll(paginationDto: PaginationDto) {
    let { page, limit } = paginationDto;

    if (page === undefined || limit === undefined) {
      page = 1;
      limit = 10;
    }

    const totalPages = await this.user.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      meta: {
        total: totalPages,
        page,
        lastPage,
      },
    };
  }

  async findOne(id: number) {
    const user = await this.user.findFirst({
      where: { id },
    });

    if (!user) throw new NotFoundException(`User with id #${id} not found`);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
