import { Controller, Post, Get, Query, Param, Body } from '@nestjs/common';
import { ResultsService } from './results.service';
import { Result } from './entities/result.entity';
import { TournamentsService } from 'src/tournament/tournament.service';

@Controller('results')
export class ResultsController {
  constructor(
    private readonly resultsService: ResultsService,
  ) {}

  @Post('allocationOfResults/:tournamentId')
  async createResult(@Param('tournamentId') tournamentId: number, @Body() resultData: { winnerScore: number, loserScore: number }) {
    const result = new Result();
    result.tournament = await this.resultsService.findOne(tournamentId);
    result.winnerScore = resultData.winnerScore;
    result.loserScore = resultData.loserScore;
    return this.resultsService.create(result);
  }

  @Get(':tournamentId')
  async getResults(
    @Param('tournamentId') tournamentId: number,
    @Query('minScore') minScore: number,
    @Query('sort') sort: 'asc' | 'desc' = 'asc',
    @Query('page') page: number = 0,
    @Query('limit') limit: number = 10,
  ) {
    return this.resultsService.getResults(tournamentId, minScore, sort, page, limit);
  }
  
}
