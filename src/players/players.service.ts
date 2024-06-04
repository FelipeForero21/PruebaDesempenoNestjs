import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
  ) {}

  private async convertTournaments(tournamentNames: string[]): Promise<Tournament[]> {
    return Promise.all(
      tournamentNames.map(async (name) => {
        let tournament = await this.tournamentRepository.findOne({ where: { name } });
        if (!tournament) {
          tournament = this.tournamentRepository.create({ name });
          tournament = await this.tournamentRepository.save(tournament);
        }
        return tournament;
      }),
    );
  }

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const tournaments = createPlayerDto.tournaments
      ? await this.convertTournaments(createPlayerDto.tournaments)
      : [];


    const player = this.playerRepository.create({
      name: createPlayerDto.name,
      tournaments,
    });

    return await this.playerRepository.save(player);
  }

  async findAll(): Promise<Player[]> {
    return await this.playerRepository.find();
  }

  async findOne(id: number): Promise<Player> {
    return await this.playerRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    const existingPlayer = await this.findOne(id);
    if (!existingPlayer) {
      throw new NotFoundException('Player not found');
    }

    const tournaments = updatePlayerDto.tournaments
      ? await this.convertTournaments(updatePlayerDto.tournaments)
      : existingPlayer.tournaments;

    const updatedPlayer = this.playerRepository.create({
      ...existingPlayer,
      ...updatePlayerDto,
      tournaments,
    });

    await this.playerRepository.save(updatedPlayer);
    return this.findOne(id);
  }

async softDelete(id: number): Promise<{ message: string }> {
  const result = await this.playerRepository.update({ id }, { deletedAt: new Date() });

  if (result.affected === 0) {
    throw new Error('Player not found');
  }

  return { message: 'Player deleted successfully' };
}

async addPlayerToTournament(playerId: number, tournamentId: number): Promise<Player> {
  const player = await this.playerRepository.findOne({ where: { id: playerId } });
  const tournament = await this.tournamentRepository.findOne({ where: { id: tournamentId } });

  if (!tournament.players) {
    tournament.players = []; 
  }
  tournament.players.push(player);
  

  await this.tournamentRepository.save(tournament);

  return player;
}
}
