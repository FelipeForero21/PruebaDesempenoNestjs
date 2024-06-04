import { HttpStatus } from '@nestjs/common';
import { TournamentsService } from './tournament.service';
import { Tournament } from './entities/tournament.entity';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    create(createTournamentDto: Tournament): Promise<{
        statusCode: HttpStatus;
        message: string;
        newTournament: Tournament;
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        tournaments: Tournament[];
    }>;
    findOne(id: number): Promise<{
        statusCode: HttpStatus;
        tournament: Tournament;
    }>;
    update(id: number, updateTournamentDto: Tournament): Promise<{
        statusCode: HttpStatus;
        message: string;
        updatedTournament: Tournament;
    }>;
    remove(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
