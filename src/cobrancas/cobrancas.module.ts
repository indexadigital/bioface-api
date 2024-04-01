import { Module } from '@nestjs/common';
import { CobrancasService } from './cobrancas.service';
import { CobrancasController } from './cobrancas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cobranca } from './entities/cobranca.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cobranca])],
  controllers: [CobrancasController],
  providers: [CobrancasService],
})
export class CobrancasModule {}
