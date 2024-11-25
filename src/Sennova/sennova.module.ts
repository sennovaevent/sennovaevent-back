import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { SennovaSchema } from "./sennova.model";
import { SennovaController } from './sennova.controller';
import { SennovaService } from './sennova.service';
import { Module } from "@nestjs/common";

@Module({
    imports:[MongooseModule.forFeature([{name:'Sennova', schema:SennovaSchema}])],
    controllers:[SennovaController],
    providers:[SennovaService],
})
export class SennovaModule{}