import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISennova } from './sennova.model';
import { SennovaDto } from './dto/Sennova.dto';
import { Model } from 'mongoose';

@Injectable()
export class SennovaService {

    constructor (@InjectModel("Sennova") private sennovaModel: Model<ISennova>){}

    async Create (sennovaDto:SennovaDto):Promise <ISennova>{
        const crear=new this.sennovaModel(sennovaDto)
        return await crear.save()
    }

    async ConsultarTodo(): Promise<ISennova[]>{
        try {
            return await this.sennovaModel.find().exec()
        } catch (Exception) {
            return null;
        }
    }
}
