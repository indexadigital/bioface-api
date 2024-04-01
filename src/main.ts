import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.APP_PORT) || 8000
  app.setGlobalPrefix('api')
  console.log('Port running on: ', port)

  const config = new DocumentBuilder()
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Digite o TOKEN_API',
        in: 'header',
       
      },      
      'token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .addSecurityRequirements('token')
    .setTitle('Documentação Backend - BioFace API')
    .setDescription('Documentação da API Nest.js v 10.0.0 com Swagger UI Express | Database PostgreSQL')
    .setVersion('1.0')
    .addTag('usuarios')
    .addTag('documentos')
    .addTag('transacoes')
    .addTag('cobrancas')
    .addTag('auth')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
        persistAuthorization: true, 
        docExpansion: 'none'
    },
    
  });

  await app.listen(port);
}
bootstrap();