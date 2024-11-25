import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import * as multer from 'multer';
import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuración del middleware multer
// Configuración del middleware multer
const storage = multer.memoryStorage(); // Almacenamiento en memoria
const uploadMiddleware = multer({ storage });
app.use(uploadMiddleware.any());


app.enableCors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});
  app.useGlobalPipes(new ValidationPipe());
  // Aumenta el límite de tamaño de la entidad de la solicitud a 10MB
  app.use(bodyParser.json({ limit: '10mb' }));


 
 // Puerto dinámico para Vercel
 const port = process.env.PORT || 3000;
 await app.listen(port);
}
bootstrap();
