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
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("./entities/player.entity");
const tournament_entity_1 = require("../tournament/entities/tournament.entity");
let PlayersService = class PlayersService {
    constructor(playerRepository, tournamentRepository) {
        this.playerRepository = playerRepository;
        this.tournamentRepository = tournamentRepository;
    }
    async convertTournaments(tournamentNames) {
        return Promise.all(tournamentNames.map(async (name) => {
            let tournament = await this.tournamentRepository.findOne({ where: { name } });
            if (!tournament) {
                tournament = this.tournamentRepository.create({ name });
                tournament = await this.tournamentRepository.save(tournament);
            }
            return tournament;
        }));
    }
    async create(createPlayerDto) {
        const tournaments = createPlayerDto.tournaments
            ? await this.convertTournaments(createPlayerDto.tournaments)
            : [];
        const player = this.playerRepository.create({
            name: createPlayerDto.name,
            tournaments,
        });
        return await this.playerRepository.save(player);
    }
    async findAll() {
        return await this.playerRepository.find();
    }
    async findOne(id) {
        return await this.playerRepository.findOne({ where: { id } });
    }
    async update(id, updatePlayerDto) {
        const existingPlayer = await this.findOne(id);
        if (!existingPlayer) {
            throw new Error('Player not found');
        }
        const tournaments = updatePlayerDto.tournaments
            ? await this.convertTournaments(updatePlayerDto.tournaments)
            : existingPlayer.tournaments;
        const updatedPlayer = this.playerRepository.create({
            ...existingPlayer,
            ...updatePlayerDto,
            tournaments,
        });
        await this.playerRepository.save(updatedPlayer);
        return this.findOne(id);
    }
    async softDelete(id) {
        const result = await this.playerRepository.update({ id }, { deletedAt: new Date() });
        if (result.affected === 0) {
            throw new Error('Player not found');
        }
        return { message: 'Player deleted successfully' };
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __param(1, (0, typeorm_1.InjectRepository)(tournament_entity_1.Tournament)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PlayersService);
//# sourceMappingURL=players.service.js.map