import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsArray()
  @IsOptional()
  tournaments?: string[];
}
