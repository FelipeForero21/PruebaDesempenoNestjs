import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.playersService.findAll();
  }


  @Patch('/UpdatePlayerOrTournament/:id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete('/deletePlayer/:id')
  async softDelete(@Param('id') id: string): Promise<{ message: string }> {
    const response = await this.playersService.softDelete(+id);
    return response;
  }
}
