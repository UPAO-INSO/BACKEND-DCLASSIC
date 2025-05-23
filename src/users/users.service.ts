import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient, Role } from 'generated/prisma';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import * as bcrypt from 'bcrypt';
import { EmpleadosService } from 'src/empleados/empleados.service';
import { PersonasService } from 'src/personas/personas.service';

@Injectable()
export class UsersService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('UsersService');

  constructor(
    private readonly empleadoService: EmpleadosService,
    private readonly personaService: PersonasService,
  ) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createUserDto: CreateUserDto) {
    const persona = await this.personaService.create({
      nombre: createUserDto.name,
      apellido: createUserDto.lastname,
      telefono: createUserDto.phone || '',
    });

    const empleado = await this.empleadoService.create({
      personaId: persona.id,
      rolId: 1,
      salario: 0,
    });

    const { email, password, username } = createUserDto;

    const existing = await this.user.findUnique({ where: { email } });
    if (existing) throw new ConflictException('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(password, 10);

    const totalUsers = await this.user.count();
    const role = totalUsers === 0 ? Role.ADMIN : Role.USER;

    const user = await this.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
        refreshToken: '',
        role,
      },
    });

    return user;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalPages = await this.rol.count();
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
