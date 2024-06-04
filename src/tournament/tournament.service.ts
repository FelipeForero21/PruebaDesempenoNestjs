import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentsRepository: Repository<Tournament>,
  ) {}

  async create(tournamentData: Tournament): Promise<Tournament> {
    const tournament = this.tournamentsRepository.create(tournamentData);
    return await this.tournamentsRepository.save(tournament);
  }

  async findAll(): Promise<Tournament[]> {
    return await this.tournamentsRepository.find();
  }

  async findOne(id: number): Promise<Tournament> {
    return this.tournamentsRepository.findOne({ where: { id }, relations: ['players'] });
  }

  async update(id: number, tournamentData: Tournament): Promise<Tournament> {
    await this.tournamentsRepository.update(id, tournamentData);
    return this.findOne(id);
  }



  async remove(id: number): Promise<{ message: string }> {
      const result = await this.tournamentsRepository.softDelete(id);
  
      if (result.affected === 0) {
        throw new Error('Tournament not found');
      }
      return { message: 'To deleted successfully' };
    }

    }
    


