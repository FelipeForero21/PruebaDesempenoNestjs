import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
import { PlayersService } from '../players/players.service';
import { ResultsService } from '../results/results.service';
export declare class TournamentsService {
    private tournamentsRepository;
    private playersService;
    private resultsService;
    constructor(tournamentsRepository: Repository<Tournament>, playersService: PlayersService, resultsService: ResultsService);
    create(tournamentData: Tournament): Promise<Tournament>;
    findAll(): Promise<Tournament[]>;
    findOne(id: number): Promise<Tournament>;
    update(id: number, tournamentData: Tournament): Promise<Tournament>;
    remove(id: number): Promise<{
        message: string;
    }>;
    assignCompetitionRandomly(tournamentId: number): Promise<void>;
    private shuffleArray;
    private generateMatchups;
}
