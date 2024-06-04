"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tournament_entity_1 = require("./entities/tournament.entity");
const tournament_service_1 = require("./tournament.service");
const players_service_1 = require("../players/players.service");
const results_service_1 = require("../results/results.service");
const player_entity_1 = require("../players/entities/player.entity");
const result_entity_1 = require("../results/entities/result.entity");
const tournament_controller_1 = require("./tournament.controller");
let TournamentModule = class TournamentModule {
};
exports.TournamentModule = TournamentModule;
exports.TournamentModule = TournamentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tournament_entity_1.Tournament]),
            typeorm_1.TypeOrmModule.forFeature([player_entity_1.Player]),
            typeorm_1.TypeOrmModule.forFeature([result_entity_1.Result]),
        ],
        providers: [tournament_service_1.TournamentsService, players_service_1.PlayersService, results_service_1.ResultsService],
        exports: [tournament_service_1.TournamentsService],
        controllers: [tournament_controller_1.TournamentsController],
    })
], TournamentModule);
//# sourceMappingURL=tournament.module.js.map