import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação Backend - BioFace API')
    .setDescription('Documentação da API Nest.js v 10.0.0 com Swagger UI Express')
    .setVersion('1.0')
    .addTag('usuarios')
    .addTag('servicos')
    .addTag('documentos')
    .addTag('transacoes')
    .addTag('cobrancas')    
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();