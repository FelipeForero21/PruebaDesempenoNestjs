"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsService = void 0;
const common_1 = require("@nestjs/common");
let ResultsService = class ResultsService {
    create(createResultDto) {
        return 'This action adds a new result';
    }
    findAll() {
        return `This action returns all results`;
    }
    findOne(id) {
        return `This action returns a #${id} result`;
    }
    update(id, updateResultDto) {
        return `This action updates a #${id} result`;
    }
    remove(id) {
        return `This action removes a #${id} result`;
    }
};
exports.ResultsService = ResultsService;
exports.ResultsService = ResultsService = __decorate([
    (0, common_1.Injectable)()
], ResultsService);
//# sourceMappingURL=results.service.js.map