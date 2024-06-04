import { ResultsService } from './results.service';
import { Result } from './entities/result.entity';
export declare class ResultsController {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    createResult(tournamentId: number, resultData: {
        winnerScore: number;
        loserScore: number;
    }): Promise<Result>;
    getResults(tournamentId: number, minScore: number, sort?: 'asc' | 'desc', page?: number, limit?: number): Promise<Result[]>;
}
