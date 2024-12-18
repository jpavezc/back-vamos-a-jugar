import { JugadorModule } from './jugador/jugador.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipoModule } from './equipos/equipo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipoEntity } from './domain/equipo.entity';
import { equipoService } from './equipos/equipo.service';
import { equipoController } from './equipos/equipo.controller';


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
    TypeOrmModule.forFeature([EquipoEntity]), 
    JugadorModule],
  controllers: [AppController, equipoController],
  providers: [AppService, equipoService],
})
export class AppModule { }


