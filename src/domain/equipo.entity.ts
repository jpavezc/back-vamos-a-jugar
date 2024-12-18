import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Equipo')
export class EquipoEntity {
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
}
