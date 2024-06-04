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
    async create(createTournamentDto) {
        try {
            const newTournament = await this.tournamentsService.create(createTournamentDto);
            return { statusCode: common_1.HttpStatus.CREATED, message: 'Tournament created successfully', newTournament };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to create tournament', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const tournaments = await this.tournamentsService.findAll();
            return { statusCode: common_1.HttpStatus.OK, tournaments };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch tournaments', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const tournament = await this.tournamentsService.findOne(id);
            if (!tournament) {
                throw new common_1.NotFoundException('Tournament not found');
            }
            return { statusCode: common_1.HttpStatus.OK, tournament };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch tournament', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateTournamentDto) {
        try {
            const updatedTournament = await this.tournamentsService.update(id, updateTournamentDto);
            return { statusCode: common_1.HttpStatus.OK, message: 'Tournament updated successfully', updatedTournament };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Tournament not found');
            }
            else {
                throw new common_1.HttpException('Failed to update tournament', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async remove(id) {
        try {
            await this.tournamentsService.remove(id);
            return { statusCode: common_1.HttpStatus.OK, message: 'Tournament deleted successfully' };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Tournament not found');
            }
            else {
                throw new common_1.HttpException('Failed to delete tournament', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
};
exports.TournamentsController = TournamentsController;
__decorate([
    (0, common_1.Post)('createNewTournament'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tournament_entity_1.Tournament]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('allTournaments'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/UpdateTournament/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tournament_entity_1.Tournament]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/deleteTournament/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TournamentsController.prototype, "remove", null);
exports.TournamentsController = TournamentsController = __decorate([
    (0, common_1.Controller)('tournaments'),
    __metadata("design:paramtypes", [tournament_service_1.TournamentsService])
], TournamentsController);
//# sourceMappingURL=tournament.controller.js.map