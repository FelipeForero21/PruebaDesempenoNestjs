import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tournament)
  tournament: Tournament;

  @ManyToOne(() => Player)
  winner: Player;

  @ManyToOne(() => Player)
  loser: Player;

  @Column()
  winnerScore: number;

  @Column()
  loserScore: number;

  @Column()
  tournamentId: number;
}
