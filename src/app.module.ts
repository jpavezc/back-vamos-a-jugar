import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo } from './domain/equipo.entity';
import { equipoService } from './equipos/equipo.service';
import { equipoController } from './equipos/equipo.controller';
import { JugadorController } from './jugador/jugador.controller';
import { JugadorService } from './jugador/jugador.service';
import { Jugador } from './domain/jugador.entity';
import { Campeonato } from './domain/campeonato.entity';
import { Partido } from './domain/partido.entity';
import { Resultado } from './domain/resultado.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'vamos-a-jugar-local',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Equipo, Jugador, Campeonato, Partido, Resultado])],
  controllers: [AppController, equipoController, JugadorController],
  providers: [AppService, equipoService, JugadorService],
})
export class AppModule { }


