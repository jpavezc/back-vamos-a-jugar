import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Equipo } from './equipo.entity';

@Entity('jugador')
export class Jugador{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  numeroTelefonico: string;

  @Column()
  fDeNacimiento: Date;

  @Column()
  habilidad: number;

  @Column()
  posicion: string;

  @ManyToMany(() => Equipo)
  equipos: Equipo[];

}
