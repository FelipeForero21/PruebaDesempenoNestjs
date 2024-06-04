import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PlayersService } from './players.service';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post("/createNewPlayer")
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get('/allPlayer')
  findAll() {
    return this.playersService.findAll();
  }


  @Patch('/updatePlayer/:id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    try {
      const updatedPlayer = await this.playersService.update(+id, updatePlayerDto);
      return updatedPlayer;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message); 
      } else {
        throw error;
      }
    }
  }

  @Delete('/deletePlayer/:id')
  async softDelete(@Param('id') id: string): Promise<{ message: string }> {
    const response = await this.playersService.softDelete(+id);
    return response;
  }

  @Post(':id/addPlayerToTournament/:tournamentId')
  async addPlayerToTournament(@Param('id') playerId: number, @Param('tournamentId') tournamentId: number) {
    const player = await this.playersService.addPlayerToTournament(playerId, tournamentId);
    return { message: 'Player successfully added to the tournament', player };
  }
}
