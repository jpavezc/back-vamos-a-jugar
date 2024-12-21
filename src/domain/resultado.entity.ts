// resultado.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Partido } from './partido.entity';

@Entity("resultado")
export class Resultado {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Partido, partido => partido.resultado)
  @JoinColumn({ name: 'partido_id' })
  partido: Partido;

  @Column()
  goles_local: number;

  @Column()
  goles_visitante: number;
}