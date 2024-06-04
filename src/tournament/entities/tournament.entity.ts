import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Player } from '../players/player.entity';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Player)
  @JoinTable()
  players: Player[];

  @Column({ nullable: true })
  winnerId: number;
}