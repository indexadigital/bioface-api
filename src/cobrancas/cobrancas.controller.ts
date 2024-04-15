import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CobrancasService } from './cobrancas.service';
import { CreateCobrancaDto } from './dto/create-cobranca.dto';
import { UpdateCobrancaDto } from './dto/update-cobranca.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
@ApiBearerAuth('token')
@ApiTags('cobrancas')
@Controller('cobrancas')
export class CobrancasController {
  constructor(private readonly cobrancasService: CobrancasService) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  create(@Body() createCobrancaDto: CreateCobrancaDto) {
    return this.cobrancasService.create(createCobrancaDto);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post(':id')
  update(@Param('id') id: string, @Body() updateCobrancaDto: UpdateCobrancaDto) {
    return this.cobrancasService.update(+id, updateCobrancaDto);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  findAll() {
    return this.cobrancasService.findAll();
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
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
