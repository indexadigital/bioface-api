import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CobrancasService } from './cobrancas.service';
import { CreateCobrancaDto } from './dto/create-cobranca.dto';
import { UpdateCobrancaDto } from './dto/update-cobranca.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth('token')
@ApiTags('cobrancas')
@Controller('cobrancas')
export class CobrancasController {
  constructor(private readonly cobrancasService: CobrancasService) {}

  @Post()
  create(@Body() createCobrancaDto: CreateCobrancaDto) {
    return this.cobrancasService.create(createCobrancaDto);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateCobrancaDto: UpdateCobrancaDto) {
    return this.cobrancasService.update(+id, updateCobrancaDto);
  }

  @Get()
  findAll() {
    return this.cobrancasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cobrancasService.findOne(+id);
  }

  
  /*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cobrancasService.remove(+id);
  }
  */
}
