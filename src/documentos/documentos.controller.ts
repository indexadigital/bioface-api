import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DocumentosService } from './documentos.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth('token')
@ApiTags('documentos')
@Controller('documentos')
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post()
  create(@Body() createDocumentoDto: CreateDocumentoDto) {
    return this.documentosService.create(createDocumentoDto);
  }

  @Get()
  findAll() {
    return this.documentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentosService.findOne(+id);
  }

  /*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentosService.remove(+id);
  }
  */
}
