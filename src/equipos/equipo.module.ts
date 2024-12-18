import { Module } from "@nestjs/common";
import { equipoService } from "./equipo.service";
import { equipoController } from "./equipo.controller";


@Module({
  imports: [],
  controllers: [equipoController],
  providers: [equipoService],
})
export class EquipoModule {}