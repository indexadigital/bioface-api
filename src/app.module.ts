import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DocumentosModule } from './documentos/documentos.module';
import { TransacoesModule } from './transacoes/transacoes.module';
import { CobrancasModule } from './cobrancas/cobrancas.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsuariosModule,
    DocumentosModule,
    TransacoesModule,
    CobrancasModule,
    AuthModule,
    UserModule
  ],
})
export class AppModule {}
