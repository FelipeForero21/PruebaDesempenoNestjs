import { Repository } from 'typeorm';
import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayersService {
    private readonly playerRepository;
    private readonly tournamentRepository;
    constructor(playerRepository: Repository<Player>, tournamentRepository: Repository<Tournament>);
    private convertTournaments;
    create(createPlayerDto: CreatePlayerDto): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player>;
    softDelete(id: number): Promise<{
        message: string;
    }>;
}
