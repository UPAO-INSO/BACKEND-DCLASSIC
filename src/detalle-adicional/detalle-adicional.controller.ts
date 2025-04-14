import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleAdicionalService } from './detalle-adicional.service';
import { CreateDetalleAdicionalDto } from './dto/create-detalle-adicional.dto';
import { UpdateDetalleAdicionalDto } from './dto/update-detalle-adicional.dto';

@Controller('detalle-adicional')
export class DetalleAdicionalController {
  constructor(private readonly detalleAdicionalService: DetalleAdicionalService) {}

  @Post()
  create(@Body() createDetalleAdicionalDto: CreateDetalleAdicionalDto) {
    return this.detalleAdicionalService.create(createDetalleAdicionalDto);
  }

  @Get()
  findAll() {
    return this.detalleAdicionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleAdicionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleAdicionalDto: UpdateDetalleAdicionalDto) {
    return this.detalleAdicionalService.update(+id, updateDetalleAdicionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleAdicionalService.remove(+id);
  }
}
