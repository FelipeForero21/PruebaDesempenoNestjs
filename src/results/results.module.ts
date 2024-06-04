import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlayersService } from 'src/players/players.service';
import { ResultsService } from 'src/results/results.service';
import { Player } from 'src/players/entities/player.entity';
import { Result } from 'src/results/entities/result.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { ResultsController } from './results.controller';
import { TournamentsService } from 'src/tournament/tournament.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tournament]), 
    TypeOrmModule.forFeature([Player]), 
    TypeOrmModule.forFeature([Result]),  
  ],
  providers: [ResultsService, PlayersService, TournamentsService],
  exports: [ResultsService],
  controllers: [ResultsController],

})
export class ResultsModule {}
