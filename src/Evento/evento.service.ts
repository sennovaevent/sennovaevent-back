import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IEvento } from './evento.model';
import { EventoDto } from './dto/Evento.dto';
import { Model } from 'mongoose';

@Injectable()
export class EventoService {

    constructor (@InjectModel("Evento") private eventoModel: Model<IEvento>){}

    async Create (eventoDto:EventoDto):Promise <IEvento>{
        const crear=new this.eventoModel(eventoDto)
        return await crear.save()
    }

    async ConsultarTodo(): Promise<IEvento[]>{
        try {
            return await this.eventoModel.find().exec()
        } catch (Exception) {
            return null;
        }
    }
}
