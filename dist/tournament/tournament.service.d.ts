import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';
export declare class TournamentsService {
    private tournamentsRepository;
    constructor(tournamentsRepository: Repository<Tournament>);
    create(tournamentData: Tournament): Promise<Tournament>;
    findAll(): Promise<Tournament[]>;
    findOne(id: number): Promise<Tournament>;
    update(id: number, tournamentData: Tournament): Promise<Tournament>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
