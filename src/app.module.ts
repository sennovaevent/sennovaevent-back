import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { EventoModule } from './Evento/evento.module';
import 'dotenv/config';
import { SennovaModule } from './Sennova/sennova.module';

const URL = process.env.MONGODB;

@Module({
  imports: [
    MongooseModule.forRoot(URL),
    EventoModule,
    SennovaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
