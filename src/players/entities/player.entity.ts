import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, DeleteDateColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Tournament, tournament => tournament.players)
  tournaments: Tournament[];

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;
}
