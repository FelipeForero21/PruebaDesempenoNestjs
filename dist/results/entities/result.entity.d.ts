import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
export declare class Result {
    id: number;
    tournament: Tournament;
    winner: Player;
    loser: Player;
    winnerScore: number;
    loserScore: number;
}
