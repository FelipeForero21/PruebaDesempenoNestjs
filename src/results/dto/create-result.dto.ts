import { IsInt } from 'class-validator';

export class CreateResultDto {
  @IsInt()
  readonly tournamentId: number;

  @IsInt()
  readonly winnerId: number;

  @IsInt()
  readonly loserId: number;

  @IsInt()
  readonly winnerScore: number;

  @IsInt()
  readonly loserScore: number;
}