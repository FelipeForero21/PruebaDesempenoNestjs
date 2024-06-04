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
exports.TournamentsController = void 0;
const common_1 = require("@nestjs/common");
const tournament_service_1 = require("./tournament.service");
const tournament_entity_1 = require("./entities/tournament.entity");
let TournamentsController = class TournamentsController {
    constructor(tournamentsService) {
        this.tournamentsService = tournamentsService;
    }
    create(createTournamentDto) {
        return this.tournamentsService.create(createTournamentDto);
    }
    findAll() {
        return this.tournamentsService.findAll();
    }
    findOne(id) {
        return this.tournamentsService.findOne(id);
    }
    update(id, updateTournamentDto) {
        return this.tournamentsService.update(id, updateTournamentDto);
    }
    remove(id) {
        return this.tournamentsService.remove(id);
    }
    async assignCompetitionRandomly(id) {
        try {
            await this.tournamentsService.assignCompetitionRandomly(id);
            return { message: 'Successfully randomly assigned competition.' };
        }
        catch (error) {
            return { message: 'Error when randomly assigning the competition.', error: error.message };
        }
    }
};
exports.TournamentsController = TournamentsController;
__decorate([
    (0, common_1.Post)('createNewTournament'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tournament_entity_1.Tournament]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('allTournaments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/UpdateTournament/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tournament_entity_1.Tournament]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/deleteTournament/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/assign-competition'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "assignCompetitionRandomly", null);
exports.TournamentsController = TournamentsController = __decorate([
    (0, common_1.Controller)('tournaments'),
    __metadata("design:paramtypes", [tournament_service_1.TournamentsService])
], TournamentsController);
//# sourceMappingURL=tournament.controller.js.map