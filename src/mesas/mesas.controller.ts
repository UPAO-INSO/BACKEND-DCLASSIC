import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { MesasService } from './mesas.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ChangeMesaStatusDto } from './dto';

@Controller('mesas')
export class MesasController {
  constructor(private readonly mesasService: MesasService) {}

  @Post()
  create(@Body() createMesaDto: CreateMesaDto) {
    return this.mesasService.create(createMesaDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.mesasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesasService.findOne(+id);
  }

  @Patch('change-status')
  changeStatus(@Body() changeMesaStatusDto: ChangeMesaStatusDto) {
    return this.mesasService.changeStatus(changeMesaStatusDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMesaDto: UpdateMesaDto,
  ) {
    return this.mesasService.update(id, updateMesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesasService.remove(+id);
  }
}
