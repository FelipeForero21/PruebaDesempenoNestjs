import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { TournamentsService } from './tournament.service';
import { Tournament } from './entities/tournament.entity';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post('createNewTournament')
  async create(@Body() createTournamentDto: Tournament) {
    try {
      const newTournament = await this.tournamentsService.create(createTournamentDto);
      return { statusCode: HttpStatus.CREATED, message: 'Tournament created successfully', newTournament };
    } catch (error) {
      throw new HttpException('Failed to create tournament', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('allTournaments')
  async findAll() {
    try {
      const tournaments = await this.tournamentsService.findAll();
      return { statusCode: HttpStatus.OK, tournaments };
    } catch (error) {
      throw new HttpException('Failed to fetch tournaments', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const tournament = await this.tournamentsService.findOne(id);
      if (!tournament) {
        throw new NotFoundException('Tournament not found');
      }
      return { statusCode: HttpStatus.OK, tournament };
    } catch (error) {
      throw new HttpException('Failed to fetch tournament', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('/UpdateTournament/:id')
  async update(@Param('id') id: number, @Body() updateTournamentDto: Tournament) {
    try {
      const updatedTournament = await this.tournamentsService.update(id, updateTournamentDto);
      return { statusCode: HttpStatus.OK, message: 'Tournament updated successfully', updatedTournament };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Tournament not found');
      } else {
        throw new HttpException('Failed to update tournament', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  @Delete('/deleteTournament/:id')
  async remove(@Param('id') id: number) {
    try {
      await this.tournamentsService.remove(id);
      return { statusCode: HttpStatus.OK, message: 'Tournament deleted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Tournament not found');
      } else {
        throw new HttpException('Failed to delete tournament', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
