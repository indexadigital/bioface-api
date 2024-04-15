process.env.TZ = 'America/Sao_Paulo';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DocumentosModule } from './documentos/documentos.module';
import { TransacoesModule } from './transacoes/transacoes.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.APP_PORT) || 8000;
  app.setGlobalPrefix('api');
  console.log('Port running on: ', port);

  const version = '1.0.1';
  const defineBearerAuth = {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'JWT',
    description: 'Digite o TOKEN_API',
    in: 'header',   
  } as SecuritySchemeObject;

  const defineDescription = 'Documentação da API Nest.js v 10.0.0 com Swagger UI Express | Database PostgreSQL '
  +'<br><br><strong>REQUISITOS PARA UTILIZAÇÃO</strong><br><br>'
  +' 1 - Faça o login em <strong>POST /api/auth</strong> com os dados de acesso da aplicação para receber o <strong>token</strong>.<br>'
  +' 2 - Utilize o <strong>token da resposta de /api/auth em Authorize* </strong> para que todas as requisições utilizem o Header com <strong>Authorization Bearer</strong><br>'
  +' 3 - Verifique se o token está válido em <strong>GET /api/auth</strong> (Expiração de 1h) '
  +'<br><br><br>* É obrigatório passar no Header das requisições um Authorization Bearer válido.';

  const configAdmin = new DocumentBuilder()
    .addBearerAuth(defineBearerAuth, 'token')
    .addSecurityRequirements('token')
    .setTitle('Documentação Backend - BioFace API (Admin)')
    .setDescription(defineDescription)
    .setVersion(version)
    .addTag('auth', 'Realiza a autenticação na API e retorna o Token para consultas.')
    .addTag('token', 'Verifica se o código de acesso do Aplicativo Mobile é válido.')
    .addTag('usuarios')
    .addTag('documentos')
    .addTag('transacoes')
    .addTag('cobrancas')    
    .build();

    const configApp = new DocumentBuilder()
    .addBearerAuth(defineBearerAuth, 'token')
    .addSecurityRequirements('token')
    .setTitle('Documentação Backend - BioFace API (APP)')
    .setDescription(defineDescription)
    .setVersion(version)
    .addTag('auth', 'Realiza a autenticação na API e retorna o Token para consultas.')
    .addTag('token', 'Verifica se o código de 6 dígitos do Aplicativo Mobile é válido.')
    .addTag('usuarios')
    .addTag('documentos')
    .addTag('transacoes')
    .build();

  const configClient = new DocumentBuilder()
    .addBearerAuth(defineBearerAuth, 'token')
    .addSecurityRequirements('token')
    .setTitle('Documentação Backend - BioFace API (Client)')
    .setDescription(defineDescription)
    .setVersion(version)
    .addTag('auth', 'Realiza a autenticação na API e retorna o Token para consultas.')
    .addTag('token', 'Verifica se o código de 6 dígitos do Aplicativo Mobile é válido.')
    .build();

  const documentAdmin = SwaggerModule.createDocument(app, configAdmin);
  const documentApp = SwaggerModule.createDocument(app, configApp, 
    { include: [AuthModule, AppModule, TokenModule, UsuariosModule, DocumentosModule, TransacoesModule] });
  const documentClient = SwaggerModule.createDocument(app, configClient, 
    { include: [AuthModule, AppModule, TokenModule] });
  

  // Setup da documentação completa em /api/backend/v1
  SwaggerModule.setup('api/backend/v1', app, documentAdmin, {
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'none',
    },
  });

  // Setup da documentação restrita em /api/app/v1
  SwaggerModule.setup('api/app/v1', app, documentApp, {
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'none',
    },
  });

  // Setup da documentação restrita em /api/client/v1
  SwaggerModule.setup('api/client/v1', app, documentClient, {
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'none',
    },
  });

  await app.listen(port);
}

bootstrap();
