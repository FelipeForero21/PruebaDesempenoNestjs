import { HttpStatus } from '@nestjs/common';
import { PlayersService } from './players.service';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        newPlayer: import("./entities/player.entity").Player;
    }>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        players: import("./entities/player.entity").Player[];
    }>;
    update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        updatedPlayer: import("./entities/player.entity").Player;
    }>;
    softDelete(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    addPlayerToTournament(playerId: number, tournamentId: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        player: import("./entities/player.entity").Player;
    }>;
}
