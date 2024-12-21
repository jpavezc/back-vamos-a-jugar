import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Equipo } from "src/domain/equipo.entity";

@Injectable()
export class equipoService {

  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepositorio: Repository<Equipo>,
  ) {}

  
  async guardarEquipo(body){
    const respuesta = this.equipoRepositorio.save(body)
    return respuesta;
  }
}