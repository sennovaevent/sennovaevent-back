import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventoDto } from './dto/Evento.dto';
import { EventoService } from './evento.service';

@Controller('evento')

export class EventoController {

    constructor (private _eventoService: EventoService){}

    @Post()
    async crear(@Body() eventoDto: EventoDto){
        const result=await this._eventoService.Create(eventoDto)
        return{ok:true, result}

    }

    @Get()
    async consultarAll(){
        const resultado=await this._eventoService.ConsultarTodo()
        return resultado
    }
}
