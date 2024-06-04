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
exports.PlayersController = void 0;
const common_1 = require("@nestjs/common");
const players_service_1 = require("./players.service");
const update_player_dto_1 = require("./dto/update-player.dto");
const create_player_dto_1 = require("./dto/create-player.dto");
let PlayersController = class PlayersController {
    constructor(playersService) {
        this.playersService = playersService;
    }
    async create(createPlayerDto) {
        try {
            const newPlayer = await this.playersService.create(createPlayerDto);
            return { statusCode: common_1.HttpStatus.CREATED, message: 'Player created successfully', newPlayer };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to create player', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const players = await this.playersService.findAll();
            return { statusCode: common_1.HttpStatus.OK, players };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch players', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updatePlayerDto) {
        try {
            const updatedPlayer = await this.playersService.update(+id, updatePlayerDto);
            return { statusCode: common_1.HttpStatus.OK, message: 'Player updated successfully', updatedPlayer };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException('Player not found');
            }
            else {
                throw new common_1.HttpException('Failed to update player', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async softDelete(id) {
        try {
            await this.playersService.softDelete(+id);
            return { statusCode: common_1.HttpStatus.OK, message: 'Player deleted successfully' };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to delete player', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async addPlayerToTournament(playerId, tournamentId) {
        try {
            const player = await this.playersService.addPlayerToTournament(playerId, tournamentId);
            return { statusCode: common_1.HttpStatus.OK, message: 'Player successfully added to the tournament', player };
        }
        catch (error) {
            throw new common_1.HttpException('Failed to add player to tournament', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PlayersController = PlayersController;
__decorate([
    (0, common_1.Post)('/createNewPlayer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/allPlayer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('/updatePlayer/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_player_dto_1.UpdatePlayerDto]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/deletePlayer/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Post)(':id/addPlayerToTournament/:tournamentId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('tournamentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "addPlayerToTournament", null);
exports.PlayersController = PlayersController = __decorate([
    (0, common_1.Controller)('players'),
    __metadata("design:paramtypes", [players_service_1.PlayersService])
], PlayersController);
//# sourceMappingURL=players.controller.js.map