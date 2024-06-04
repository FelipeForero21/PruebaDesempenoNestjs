

import { IsString } from 'class-validator';

export class CreateTournamentDto {
  @IsString()
  readonly name: string;
}

