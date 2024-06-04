import { PlayersService } from './players.service';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): Promise<import("./entities/player.entity").Player>;
    findAll(): Promise<import("./entities/player.entity").Player[]>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<import("./entities/player.entity").Player>;
    softDelete(id: string): Promise<{
        message: string;
    }>;
    addPlayerToTournament(playerId: number, tournamentId: number): Promise<{
        message: string;
        player: import("./entities/player.entity").Player;
    }>;
}
