"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const result_entity_1 = require("./entities/result.entity");
let ResultsService = class ResultsService {
    constructor(resultRepository) {
        this.resultRepository = resultRepository;
    }
    async create(resultData) {
        const result = this.resultRepository.create(resultData);
        return await this.resultRepository.save(result);
    }
    async findAll() {
        return await this.resultRepository.find();
    }
    async findOne(id) {
        return await this.resultRepository.findOne({ where: { id } });
    }
    async update(id, resultData) {
        await this.resultRepository.update(id, resultData);
        return this.findOne(id);
    }
    async remove(id) {
        await this.resultRepository.delete(id);
    }
};
exports.ResultsService = ResultsService;
exports.ResultsService = ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(result_entity_1.Result)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResultsService);
//# sourceMappingURL=results.service.js.map