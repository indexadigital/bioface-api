import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
@ApiBearerAuth('token')
@ApiTags('transacoes')
@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly transacoesService: TransacoesService) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  create(@Body() createTransacaoDto: CreateTransacaoDto) {
    return this.transacoesService.create(createTransacaoDto);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post(':id')
  update(@Param('id') id: string, @Body() updateTransacaoDto: UpdateTransacaoDto) {
    return this.transacoesService.update(+id, updateTransacaoDto);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  findAll() {
    return this.transacoesService.findAll();
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
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
