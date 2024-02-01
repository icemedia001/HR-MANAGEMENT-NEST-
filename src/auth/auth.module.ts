import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { LocalAuthStrategy } from "./local-auth-strategy";
import { JWTAuthStrategy } from "./jwt-auth-strategy";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [UserModule, PassportModule, JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return {
        secret: configService.get("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.get("JWT_EXPIRES_IN")
        },
      }
    }
  }),
],
  providers: [AuthService, LocalAuthStrategy, JWTAuthStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
