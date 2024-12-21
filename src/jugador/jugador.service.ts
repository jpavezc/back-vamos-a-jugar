/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jugador } from 'src/domain/jugador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JugadorService {

      constructor(
        @InjectRepository(Jugador)
        private readonly jugadorRepositorio: Repository<Jugador>,
      ) {}
    
      
      async guardarJugador(body){
        const respuesta = this.jugadorRepositorio.save(body)
        return respuesta;
      }
    
 }
