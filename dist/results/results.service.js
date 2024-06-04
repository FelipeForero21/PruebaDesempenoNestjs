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
const players_service_1 = require("../players/players.service");
const tournament_entity_1 = require("../tournament/entities/tournament.entity");
const result_entity_1 = require("./entities/result.entity");
let ResultsService = class ResultsService {
    constructor(tournamentsRepository, resultsRepository, playersService) {
        this.tournamentsRepository = tournamentsRepository;
        this.resultsRepository = resultsRepository;
        this.playersService = playersService;
    }
    async findOne(id) {
        return this.tournamentsRepository.findOne({ where: { id } });
    }
    async create(resultData) {
        const result = this.resultsRepository.create(resultData);
        return await this.resultsRepository.save(result);
    }
    async assignCompetitionRandomly(tournamentId) {
        const tournament = await this.findOne(tournamentId);
        const players = await this.playersService.findAll();
        const tournamentPlayers = tournament.players;
        if (tournamentPlayers.length < 2) {
            throw new Error('There are not enough registered players to assign the competition.');
        }
        const shuffledPlayers = this.shuffleArray(tournamentPlayers);
        const matchups = this.generateMatchups(shuffledPlayers);
        for (const matchup of matchups) {
            const result = new result_entity_1.Result();
            result.tournament = tournament;
            result.winner = matchup[0];
            result.loser = matchup[1];
            await this.resultsRepository.create(result);
        }
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    generateMatchups(players) {
        const matchups = [];
        for (let i = 0; i < players.length; i += 2) {
            if (i + 1 < players.length) {
                matchups.push([players[i], players[i + 1]]);
            }
        }
        return matchups;
    }
    async getResults(tournamentId, minScore, sort, page, limit) {
        const results = await this.resultsRepository.find({
            where: {
                tournamentId,
                winnerScore: (0, typeorm_2.MoreThan)(minScore)
            },
            order: {
                winnerScore: sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
            },
            skip: page * limit,
            take: limit
        });
        return results;
    }
};
exports.ResultsService = ResultsService;
exports.ResultsService = ResultsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tournament_entity_1.Tournament)),
    __param(1, (0, typeorm_1.InjectRepository)(result_entity_1.Result)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        players_service_1.PlayersService])
], ResultsService);
//# sourceMappingURL=results.service.js.map