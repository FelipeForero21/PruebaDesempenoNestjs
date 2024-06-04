import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
export declare class ResultsService {
    create(createResultDto: CreateResultDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResultDto: UpdateResultDto): string;
    remove(id: number): string;
}
