import { Result } from './entities/result.entity';
import { ResultsService } from './results.service';
export declare class ResultsController {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    create(createResultDto: Result): Promise<Result>;
    findAll(): Promise<Result[]>;
    findOne(id: number): Promise<Result>;
    update(id: number, updateResultDto: Result): Promise<Result>;
    remove(id: number): Promise<void>;
}
