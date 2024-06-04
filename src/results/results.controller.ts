import { Controller, Post, Get, Query, Param, Body, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { ResultsService } from './results.service';
import { Result } from './entities/result.entity';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post('allocationOfResults/:tournamentId')
  async createResult(@Param('tournamentId') tournamentId: number, @Body() resultData: { winnerScore: number, loserScore: number }) {
    try {
      const tournament = await this.resultsService.findOne(tournamentId);
      if (!tournament) {
        throw new NotFoundException('Tournament not found');
      }
      const result = new Result();
      result.tournament = tournament;
      result.winnerScore = resultData.winnerScore;
      result.loserScore = resultData.loserScore;
      const newResult = await this.resultsService.create(result);
      return { statusCode: HttpStatus.CREATED, message: 'Result created successfully', newResult };
    } catch (error) {
      throw new HttpException('Failed to create result', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':tournamentId')
  async getResults(
    @Param('tournamentId') tournamentId: number,
    @Query('minScore') minScore: number,
    @Query('sort') sort: 'asc' | 'desc' = 'asc',
    @Query('page') page: number = 0,
    @Query('limit') limit: number = 10,
  ) {
    try {
      const results = await this.resultsService.getResults(tournamentId, minScore, sort, page, limit);
      return { statusCode: HttpStatus.OK, results };
    } catch (error) {
      throw new HttpException('Failed to fetch results', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
