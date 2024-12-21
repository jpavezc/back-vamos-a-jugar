// partido.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Campeonato } from './campeonato.entity';
import { Equipo } from './equipo.entity';
import { Resultado } from './resultado.entity';

@Entity("partido")
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Campeonato, campeonato => campeonato.partidos)
  campeonato: Campeonato;

  @ManyToOne(() =>Equipo)
  @JoinColumn({ name: 'equipo_local_id' })
  equipo_local:Equipo;

  @ManyToOne(() =>Equipo)
  @JoinColumn({ name: 'equipo_visitante_id' })
  equipo_visitante:Equipo;

  @Column({ type: 'date' })
  fecha: Date;

  @Column()
  estadio: string;

  @OneToOne(() => Resultado, resultado => resultado.partido)
  resultado: Resultado;
}