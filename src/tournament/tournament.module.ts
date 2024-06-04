import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { TournamentsService } from './tournament.service';
import { PlayersService } from 'src/players/players.service';
import { ResultsService } from 'src/results/results.service';
import { Player } from 'src/players/entities/player.entity';
import { Result } from 'src/results/entities/result.entity';
import { TournamentsController } from './tournament.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tournament]),
    TypeOrmModule.forFeature([Player]),
    TypeOrmModule.forFeature([Result]),
  ],
  providers: [TournamentsService, PlayersService, ResultsService],
  exports: [TournamentsService],
  controllers: [TournamentsController],

})
export class TournamentModule { }
