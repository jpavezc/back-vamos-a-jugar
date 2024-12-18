import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorController } from './jugador.controller';
import { JugadorService } from './jugador.service';
import { Module } from '@nestjs/common';
import { EquipoEntity } from 'src/domain/equipo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EquipoEntity])],
    controllers: [
        JugadorController,],
    providers: [
        JugadorService,],
})
export class JugadorModule { }
