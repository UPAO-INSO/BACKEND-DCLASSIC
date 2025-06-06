import {
  Injectable,
  Logger,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { PrismaClient } from './../../generated/prisma';
import { RolesService } from 'src/roles/roles.service';
import { Puesto } from './enum/puesto.enum';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class EmpleadosService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('EmpleadosService');

  constructor(private readonly rolService: RolesService) {
    super();
  }

  onModuleInit() {
    this.$connect();
    this.logger.log('MySQL connected');
  }

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    return await this.empleado.create({
      data: createEmpleadoDto,
    });
  }

  async calcularSalario(nombrePuesto: string) {
    const puesto = await this.rolService.findByNombre(nombrePuesto);

    if (!puesto) {
      throw new NotFoundException(`Puesto ${puesto} not found`);
    }

    const puestos: Puesto[] = Object.values(Puesto);

    let salario = 0;

    puestos.forEach(() => {
      switch (puesto.nombre) {
        case Puesto.CAJERO:
          return (salario = 1200);
        case Puesto.COCINERO:
          return (salario = 1400);
        case Puesto.GERENTE:
          return (salario = 2300);
        case Puesto.MESERO:
          return (salario = 600);
      }
    });

    return salario;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalPages = await this.empleado.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.empleado.findMany({
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

  findOne(id: number) {
    const empleado = this.empleado.findFirst({
      where: { id },
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado with id ${id} not found`);
    }

    return empleado;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
