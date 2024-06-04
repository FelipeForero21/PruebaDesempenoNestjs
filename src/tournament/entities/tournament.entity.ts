import { Player } from 'src/players/entities/player.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Player, player => player.tournaments)
  @JoinTable()
  players: Player[];
}
