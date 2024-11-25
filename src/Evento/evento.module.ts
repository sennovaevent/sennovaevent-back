import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { EventoSchema } from "./evento.model";
import { EventoController } from './evento.controller';
import { EventoService } from './evento.service';
import { Module } from "@nestjs/common";

@Module({
    imports:[MongooseModule.forFeature([{name:'Evento', schema:EventoSchema}])],
    controllers:[EventoController],
    providers:[EventoService],
})
export class EventoModule{}