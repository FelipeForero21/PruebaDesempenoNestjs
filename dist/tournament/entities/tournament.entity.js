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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournament = void 0;
const player_entity_1 = require("../../players/entities/player.entity");
const typeorm_1 = require("typeorm");
let Tournament = class Tournament {
};
exports.Tournament = Tournament;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tournament.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tournament.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => player_entity_1.Player),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Tournament.prototype, "players", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Tournament.prototype, "winnerId", void 0);
exports.Tournament = Tournament = __decorate([
    (0, typeorm_1.Entity)()
], Tournament);
//# sourceMappingURL=tournament.entity.js.map