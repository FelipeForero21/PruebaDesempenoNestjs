import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { PlayersService } from '../players/players.service';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Result } from './entities/result.entity';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentsRepository: Repository<Tournament>,
    @InjectRepository(Result)
    private resultsRepository: Repository<Result>,
    private playersService: PlayersService,
  ) {}

  async findOne(id: number): Promise<Tournament> {
    const tournament = await this.tournamentsRepository.findOne({ where: { id }, relations: ['players'] });
    if (!tournament) {
      throw new Error('Tournament not found');
    }
    return tournament;
  }

  async create(resultData: Result): Promise<Result> {
    const result = this.resultsRepository.create(resultData);
    return await this.resultsRepository.save(result);
  }

  async assignCompetitionRandomly(tournamentId: number): Promise<void> {
    const tournament = await this.findOne(tournamentId);
    if (!tournament) {
      throw new Error('Tournament not found');
    }

    const tournamentPlayers = tournament.players;
    if (!tournamentPlayers) {
      throw new Error('Tournament players not found');
    }
    if (tournamentPlayers.length < 2) {
      throw new Error('There are not enough registered players to assign the competition.');
    }

    const shuffledPlayers = this.shuffleArray(tournamentPlayers);
    const matchups = this.generateMatchups(shuffledPlayers);

    for (const matchup of matchups) {
      const result: Result = new Result();
      result.tournament = tournament;
      result.winner = matchup[0];
      result.loser = matchup[1];
      result.winnerScore = 0; 
      result.loserScore = 0;

      await this.resultsRepository.save(result);
    }
  }

  async getResults(tournamentId: number, minScore: number, sort: string, page: number, limit: number): Promise<Result[]> {
    return await this.resultsRepository.find({
      where: {
        tournamentId,
        winnerScore: MoreThan(minScore)
      },
      order: {
        winnerScore: sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
      },
      skip: page * limit,
      take: limit
    });
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
