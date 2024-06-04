import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
export declare class TournamentController {
    private readonly tournamentService;
    constructor(tournamentService: TournamentService);
    create(createTournamentDto: CreateTournamentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTournamentDto: UpdateTournamentDto): string;
    remove(id: string): string;
}
