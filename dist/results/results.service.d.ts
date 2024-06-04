import { Repository } from 'typeorm';
import { Result } from './entities/result.entity';
export declare class ResultsService {
    private readonly resultRepository;
    constructor(resultRepository: Repository<Result>);
    create(resultData: Result): Promise<Result>;
    findAll(): Promise<Result[]>;
    findOne(id: number): Promise<Result>;
    update(id: number, resultData: Result): Promise<Result>;
    remove(id: number): Promise<void>;
}
