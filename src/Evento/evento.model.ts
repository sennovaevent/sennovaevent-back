import mongoose from "mongoose";
import * as moment from "moment-timezone";


export const EventoSchema = new mongoose.Schema({
    Nombre: String,
    Fecha: { type: String, default:()=>moment.tz(Date.now(),"America/Bogota").format('YYYY-MM-DD h:mm:ss  A') },
    
    Proyecto: String,
    Ficha:String,   
    Evaluador:String,
    Creatividad: Number,
    RSA: Number,
    PyC: Number,
    EyC: Number
})

export interface IEvento extends mongoose.Document{
    Nombre: string,
    Fecha: Date;
    Proyecto: string,
    Ficha:string,
    Evaluador:string,
    Creatividad: number,
    RSA: number,
    PyC: number,
    EyC: number
}