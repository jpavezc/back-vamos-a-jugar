/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { crearJugadorDTO } from './jugador.DTO';

@Controller('jugador')
export class JugadorController { 
    constructor(private readonly jugadorService: JugadorService) {}
    @Post()
    crearJugador(@Body() crearJugador: crearJugadorDTO){
        console.log("RespuestaCrearJugador", crearJugador)
        return; 
    }
}
