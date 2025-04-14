import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdicionalesService } from './adicionales.service';
import { CreateAdicionaleDto } from './dto/create-adicionale.dto';
import { UpdateAdicionaleDto } from './dto/update-adicionale.dto';

@Controller('adicionales')
export class AdicionalesController {
  constructor(private readonly adicionalesService: AdicionalesService) {}

  @Post()
  create(@Body() createAdicionaleDto: CreateAdicionaleDto) {
    return this.adicionalesService.create(createAdicionaleDto);
  }

  @Get()
  findAll() {
    return this.adicionalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adicionalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdicionaleDto: UpdateAdicionaleDto) {
    return this.adicionalesService.update(+id, updateAdicionaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adicionalesService.remove(+id);
  }
}
