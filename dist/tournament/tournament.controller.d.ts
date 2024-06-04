import { TournamentsService } from './tournament.service';
import { Tournament } from './entities/tournament.entity';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    create(createTournamentDto: Tournament): Promise<Tournament>;
    findAll(): Promise<Tournament[]>;
    findOne(id: number): Promise<Tournament>;
    update(id: number, updateTournamentDto: Tournament): Promise<Tournament>;
    remove(id: number): Promise<void>;
    assignCompetitionRandomly(id: number): Promise<{
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: any;
    }>;
}
