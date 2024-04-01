import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth('token')
@ApiTags('transacoes')
@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  @Post()
  create(@Body() createTransacaoDto: CreateTransacaoDto) {
    return this.transacoesService.create(createTransacaoDto);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateTransacaoDto: UpdateTransacaoDto) {
    return this.transacoesService.update(+id, updateTransacaoDto);
  }

  @Get()
  findAll() {
    return this.transacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacoesService.findOne(+id);
  }
  
  /*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacoesService.remove(+id);
  }
  */
}
