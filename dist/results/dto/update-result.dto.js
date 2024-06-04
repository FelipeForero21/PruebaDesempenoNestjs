"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_result_dto_1 = require("./create-result.dto");
class UpdateResultDto extends (0, swagger_1.PartialType)(create_result_dto_1.CreateResultDto) {
}
exports.UpdateResultDto = UpdateResultDto;
//# sourceMappingURL=update-result.dto.js.map