import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    private readonly API_KEY = 'felipeforero';

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.headers['x-api-key'];

        if (apiKey && apiKey === this.API_KEY) {
            return true;
        }

        throw new UnauthorizedException('Invalid API Key');
    }
}
