import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
import { PlayersService } from '../players/players.service';
import { ResultsService } from '../results/results.service';
import { Result } from '../results/entities/result.entity';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentsRepository: Repository<Tournament>,
    private playersService: PlayersService,
    private resultsService: ResultsService,
  ) {}

  async create(tournamentData: Tournament): Promise<Tournament> {
    const tournament = this.tournamentsRepository.create(tournamentData);
    return await this.tournamentsRepository.save(tournament);
  }

  async findAll(): Promise<Tournament[]> {
    return await this.tournamentsRepository.find();
  }

  async findOne(id: number): Promise<Tournament> {
    return this.tournamentsRepository.findOne({ where: { id }, relations: ['players'] });
  }

  async update(id: number, tournamentData: Tournament): Promise<Tournament> {
    await this.tournamentsRepository.update(id, tournamentData);
    return this.findOne(id);
  }



  async remove(id: number): Promise<{ message: string }> {
      const result = await this.tournamentsRepository.softDelete(id);
  
      if (result.affected === 0) {
        throw new Error('Tournament not found');
      }
      return { message: 'Tournament deleted successfully' };
    }

  async assignCompetitionRandomly(tournamentId: number): Promise<void> {
    const tournament = await this.findOne(tournamentId);
    const players = await this.playersService.findAll();
  
    const tournamentPlayers = tournament.players;
  
    if (tournamentPlayers.length < 2) {
      throw new Error('There are not enough players registered to assign the competition.');
    }
  
    const shuffledPlayers = this.shuffleArray(tournamentPlayers);
  
    const matchups = this.generateMatchups(shuffledPlayers);
  
    for (const matchup of matchups) {
      const result: Result = new Result();
      result.tournament = tournament; 
      result.winner = matchup[0];
      result.loser = matchup[1]; 
      result.winnerScore = Math.floor(Math.random() * 100) + 1; 
      result.loserScore = Math.floor(Math.random() * 100) + 1; 
  
      await this.resultsService.create(result);
    }
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private generateMatchups(players: any[]): any[][] {
    const matchups: any[][] = [];
    for (let i = 0; i < players.length; i += 2) {
      if (i + 1 < players.length) {
        matchups.push([players[i], players[i + 1]]);
      }
    }
    return matchups;
  }
}


