import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './entities/result.entity';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private readonly resultRepository: Repository<Result>,
  ) {}

  async create(resultData: Result): Promise<Result> {
    const result = this.resultRepository.create(resultData);
    return await this.resultRepository.save(result);
  }

  async findAll(): Promise<Result[]> {
    return await this.resultRepository.find();
  }

  async findOne(id: number): Promise<Result> {
    return await this.resultRepository.findOne({ where: { id }});
  } 


  async update(id: number, resultData: Result): Promise<Result> {
    await this.resultRepository.update(id, resultData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.resultRepository.delete(id);
  }
}
