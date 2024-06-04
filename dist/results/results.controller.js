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
exports.ResultsController = void 0;
const common_1 = require("@nestjs/common");
const results_service_1 = require("./results.service");
const result_entity_1 = require("./entities/result.entity");
let ResultsController = class ResultsController {
    constructor(resultsService) {
        this.resultsService = resultsService;
    }
    async createResult(tournamentId, resultData) {
        const result = new result_entity_1.Result();
        result.tournament = await this.resultsService.findOne(tournamentId);
        result.winnerScore = resultData.winnerScore;
        result.loserScore = resultData.loserScore;
        return this.resultsService.create(result);
    }
    async getResults(tournamentId, minScore, sort = 'asc', page = 0, limit = 10) {
        return this.resultsService.getResults(tournamentId, minScore, sort, page, limit);
    }
    async assignCompetitionRandomly(id) {
        try {
            await this.resultsService.assignCompetitionRandomly(id);
            return { message: 'Successfully randomly assigned competition.' };
        }
        catch (error) {
            return { message: 'Error when randomly assigning the competition.', error: error.message };
        }
    }
};
exports.ResultsController = ResultsController;
__decorate([
    (0, common_1.Post)('allocationOfResults/:tournamentId'),
    __param(0, (0, common_1.Param)('tournamentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "createResult", null);
__decorate([
    (0, common_1.Get)(':tournamentId'),
    __param(0, (0, common_1.Param)('tournamentId')),
    __param(1, (0, common_1.Query)('minScore')),
    __param(2, (0, common_1.Query)('sort')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "getResults", null);
__decorate([
    (0, common_1.Post)(':id/assign-competition'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResultsController.prototype, "assignCompetitionRandomly", null);
exports.ResultsController = ResultsController = __decorate([
    (0, common_1.Controller)('results'),
    __metadata("design:paramtypes", [results_service_1.ResultsService])
], ResultsController);
//# sourceMappingURL=results.controller.js.map