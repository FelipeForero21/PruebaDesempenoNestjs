import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
export declare class ResultsController {
    private readonly resultsService;
    constructor(resultsService: ResultsService);
    create(createResultDto: CreateResultDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResultDto: UpdateResultDto): string;
    remove(id: string): string;
}
