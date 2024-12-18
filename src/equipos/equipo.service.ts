import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EquipoEntity } from "src/domain/equipo.entity";

@Injectable()
export class equipoService {

  constructor(
    @InjectRepository(EquipoEntity)
    private readonly equipoRepositorio: Repository<EquipoEntity>,
  ) {}

  
  async guardarEquipo(body){
    const respuesta = this.equipoRepositorio.save(body)
    return respuesta;
  }
}