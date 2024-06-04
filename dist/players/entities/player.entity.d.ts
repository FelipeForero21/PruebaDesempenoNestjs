import { Tournament } from 'src/tournament/entities/tournament.entity';
export declare class Player {
    id: number;
    name: string;
    tournaments: Tournament[];
    deletedAt: Date;
}
