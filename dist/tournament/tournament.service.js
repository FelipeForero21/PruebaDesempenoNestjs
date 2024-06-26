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
exports.TournamentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tournament_entity_1 = require("./entities/tournament.entity");
let TournamentsService = class TournamentsService {
    constructor(tournamentsRepository) {
        this.tournamentsRepository = tournamentsRepository;
    }
    async create(tournamentData) {
        const tournament = this.tournamentsRepository.create(tournamentData);
        return await this.tournamentsRepository.save(tournament);
    }
    async findAll() {
        return await this.tournamentsRepository.find();
    }
    async findOne(id) {
        return this.tournamentsRepository.findOne({ where: { id }, relations: ['players'] });
    }
    async update(id, tournamentData) {
        await this.tournamentsRepository.update(id, tournamentData);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.tournamentsRepository.softDelete(id);
        if (result.affected === 0) {
            throw new Error('Tournament not found');
        }
        return { message: 'To deleted successfully' };
    }
};
exports.TournamentsService = TournamentsService;
exports.TournamentsService = TournamentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tournament_entity_1.Tournament)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TournamentsService);
//# sourceMappingURL=tournament.service.js.map