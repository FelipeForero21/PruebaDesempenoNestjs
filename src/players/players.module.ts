import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player } from './entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Result } from 'src/results/entities/result.entity';
import { TournamentsService } from 'src/tournament/tournament.service';
import { ResultsService } from 'src/results/results.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    TypeOrmModule.forFeature([Tournament]),  
    TypeOrmModule.forFeature([Result]),  
  ],
  controllers: [PlayersController],
  providers: [TournamentsService, PlayersService, ResultsService],
  exports: [PlayersService],
})
export class PlayersModule {}
