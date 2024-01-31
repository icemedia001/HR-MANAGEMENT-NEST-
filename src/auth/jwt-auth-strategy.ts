import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable() 










\45
export class JWTAuthStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly configService: ConfigService
    ){
        super(
            {
             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
             secretOrKey: configService.get("JWT_SECRET"),
            }
        );
    }

        async validate(payload: any){
            return {userId: payload.sub, username: payload.username }
        }
}