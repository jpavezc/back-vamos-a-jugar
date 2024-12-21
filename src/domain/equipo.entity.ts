import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Jugador } from './jugador.entity';
import { Campeonato } from './campeonato.entity';

@Entity('equipo')
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  nJugadores: number;

  @Column()
  insignia: string;

  @Column()
  ciudad: string;

  @ManyToMany(() => Jugador)
  @JoinTable({ name: 'equipo_jugador' })
  jugadores: Jugador[];

  @ManyToMany(() => Campeonato)
  campeonatos: Campeonato[];
}
