import { Repository } from 'typeorm';
import { PlayersService } from '../players/players.service';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Result } from './entities/result.entity';
export declare class ResultsService {
    private tournamentsRepository;
    private resultsRepository;
    private playersService;
    constructor(tournamentsRepository: Repository<Tournament>, resultsRepository: Repository<Result>, playersService: PlayersService);
    findOne(id: number): Promise<Tournament>;
    create(resultData: Result): Promise<Result>;
    assignCompetitionRandomly(tournamentId: number): Promise<void>;
    private shuffleArray;
    private generateMatchups;
    getResults(tournamentId: number, minScore: number, sort: string, page: number, limit: number): Promise<Result[]>;
}
