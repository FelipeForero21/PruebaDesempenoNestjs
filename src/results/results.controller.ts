import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Result } from './entities/result.entity';
import { ResultsService } from './results.service';


@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  create(@Body() createResultDto: Result) {
    return this.resultsService.create(createResultDto);
  }

  @Get()
  findAll() {
    return this.resultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.resultsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateResultDto: Result) {
    return this.resultsService.update(id, updateResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.resultsService.remove(id);
  }
}




