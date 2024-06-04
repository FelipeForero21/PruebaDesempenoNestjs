import { HttpStatus } from '@nestjs/common';
import { ResultsService } from './results.service';
import { Result } from './entities/result.entity';
export declare class ResultsController {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    createResult(tournamentId: number, resultData: {
        winnerScore: number;
        loserScore: number;
    }): Promise<{
        statusCode: HttpStatus;
        message: string;
        newResult: Result;
    }>;
    getResults(tournamentId: number, minScore: number, sort?: 'asc' | 'desc', page?: number, limit?: number): Promise<{
        statusCode: HttpStatus;
        results: Result[];
    }>;
}
