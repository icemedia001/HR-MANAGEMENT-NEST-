import { Request as Req } from 'express';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth-guard';
import { AuthService } from './auth.service';
import { JWTAuthGuard } from './jwt-auth-guard';

/*  Request going in throught the route: localhost:80881/auth will go through the controller, to have the /login route do the following: */
@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post("login")
    @UseGuards(LocalAuthGuard)
    async login(@Request() req: Req) {
        return this.authService.login(req.user);
    }

    @Get("profile")
    @UseGuards(JWTAuthGuard)
    async profile(@Request() req: Req) {
        return req.user;
    }
}
