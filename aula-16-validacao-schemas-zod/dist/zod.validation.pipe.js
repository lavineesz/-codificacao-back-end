var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, } from '@nestjs/common';
import { ZodType } from 'zod';
let ZodValidationPipe = class ZodValidationPipe {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        if (metadata.type !== 'body') {
            return value;
        }
        const resultado = this.schema.safeParse(value);
        if (!resultado.success) {
            const erros = resultado.error.issues.map((issue) => ({
                campo: issue.path.join('.'),
                mensagem: issue.message,
            }));
            throw new BadRequestException({
                statusCode: 400,
                erros,
            });
        }
        return resultado.data;
    }
};
ZodValidationPipe = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ZodType])
], ZodValidationPipe);
export { ZodValidationPipe };
//# sourceMappingURL=zod.validation.pipe.js.map