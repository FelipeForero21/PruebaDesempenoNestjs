import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TournamentsService } from './tournament.service';
import { Tournament } from './entities/tournament.entity';

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post('createNewTournament')
  create(@Body() createTournamentDto: Tournament) {
    return this.tournamentsService.create(createTournamentDto);
  }

  @Get('allTournaments')
  findAll() {
    return this.tournamentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tournamentsService.findOne(id);
  }

  @Put('/UpdateTournament/:id')
  update(@Param('id') id: number, @Body() updateTournamentDto: Tournament) {
    return this.tournamentsService.update(id, updateTournamentDto);
  }

  @Delete('/deleteTournament/:id')
  remove(@Param('id') id: number) {
    return this.tournamentsService.remove(id);
  }

  @Post(':id/assign-competition')
  async assignCompetitionRandomly(@Param('id') id: number) {
    try {
      await this.tournamentsService.assignCompetitionRandomly(id);
      return { message: 'Successfully randomly assigned competition.' };
    } catch (error) {
      return { message: 'Error when randomly assigning the competition.', error: error.message };
    }
  }
}

