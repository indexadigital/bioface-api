import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transacao } from 'src/transacoes/entities/transacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transacao])],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
