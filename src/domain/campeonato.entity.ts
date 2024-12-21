// campeonato.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Equipo } from './equipo.entity';
import { Partido } from './partido.entity';

@Entity("campeonato")
export class Campeonato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;

  @ManyToMany(() => Equipo)
  @JoinTable({ name: 'campeonato_equipo' })
  equipos: Equipo[];

  @OneToMany(() => Partido, partido => partido.campeonato)
  partidos: Partido[];
}