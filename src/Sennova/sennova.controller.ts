import { Body, Controller, Get, Post } from '@nestjs/common';
import { SennovaDto } from './dto/Sennova.dto';
import { SennovaService } from './sennova.service';

@Controller('sennova')

export class SennovaController {

    constructor (private _sennovaService: SennovaService){}

    @Post()
    async crear(@Body() sennovaDto: SennovaDto){
        const result=await this._sennovaService.Create(sennovaDto)
        return{ok:true, result}

    }

    @Get()
    async consultarAll(){
        const resultado=await this._sennovaService.ConsultarTodo()
        return resultado
    }
}
