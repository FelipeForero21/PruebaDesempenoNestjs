import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { PlayersService } from './players.service';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post('/createNewPlayer')
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    try {
      const newPlayer = await this.playersService.create(createPlayerDto);
      return { statusCode: HttpStatus.CREATED, message: 'Player created successfully', newPlayer };
    } catch (error) {
      throw new HttpException('Failed to create player', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/allPlayer')
  async findAll() {
    try {
      const players = await this.playersService.findAll();
      return { statusCode: HttpStatus.OK, players };
    } catch (error) {
      throw new HttpException('Failed to fetch players', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch('/updatePlayer/:id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    try {
      const updatedPlayer = await this.playersService.update(+id, updatePlayerDto);
      return { statusCode: HttpStatus.OK, message: 'Player updated successfully', updatedPlayer };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Player not found');
      } else {
        throw new HttpException('Failed to update player', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Delete('/deletePlayer/:id')
  async softDelete(@Param('id') id: string) {
    try {
      await this.playersService.softDelete(+id);
      return { statusCode: HttpStatus.OK, message: 'Player deleted successfully' };
    } catch (error) {
      throw new HttpException('Failed to delete player', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post(':id/addPlayerToTournament/:tournamentId')
  async addPlayerToTournament(@Param('id') playerId: number, @Param('tournamentId') tournamentId: number) {
    try {
      const player = await this.playersService.addPlayerToTournament(playerId, tournamentId);
      return { statusCode: HttpStatus.OK, message: 'Player successfully added to the tournament', player };
    } catch (error) {
      throw new HttpException('Failed to add player to tournament', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
