import mongoose from "mongoose";
import * as moment from "moment-timezone";


export const SennovaSchema = new mongoose.Schema({
    Nombre: String,
    Fecha: { type: String, default:()=>moment.tz(Date.now(),"America/Bogota").format('YYYY-MM-DD h:mm:ss  A') },
    
    Proyecto: String,
    Codigo:String,   
    Evaluador:String,
    Centro: String,
    Total: Number,
   
})

export interface ISennova extends mongoose.Document{
    Nombre: string,
    Fecha: Date;
    Proyecto: string,
    Codigo:string,
    Evaluador:string,
    Centro: string,
    Creatividad: number,
    
}