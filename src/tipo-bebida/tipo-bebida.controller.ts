import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TipoBebidaService } from './tipo-bebida.service';
import { CreateTipoBebidaDto } from './dto/create-tipo-bebida.dto';
import { UpdateTipoBebidaDto } from './dto/update-tipo-bebida.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('tipo-bebida')
export class TipoBebidaController {
  constructor(private readonly tipoBebidaService: TipoBebidaService) {}

  @Post()
  create(@Body() createTipoBebidaDto: CreateTipoBebidaDto) {
    return this.tipoBebidaService.create(createTipoBebidaDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.tipoBebidaService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoBebidaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoBebidaDto: UpdateTipoBebidaDto,
  ) {
    return this.tipoBebidaService.update(+id, updateTipoBebidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoBebidaService.remove(+id);
  }
}
