import { Body, Controller, Get, Post } from "@nestjs/common";
import { equipoService } from "./equipo.service";
import { crearEquipoDTO } from "./equipo.dto";

@Controller('equipo')
export class equipoController {
  constructor(private readonly equipoService: equipoService) {}

  @Post()
  create(@Body() createEquipoDto: crearEquipoDTO) {
    console.log('Informacion:  --- ', createEquipoDto)
    try {
      this.equipoService.guardarEquipo(createEquipoDto)
      return "201"

    } catch (error) {
      return error
    }

  }
}  