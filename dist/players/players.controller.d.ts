import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    create(createPlayerDto: CreatePlayerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlayerDto: UpdatePlayerDto): string;
    remove(id: string): string;
}
