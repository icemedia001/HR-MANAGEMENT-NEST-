import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { userService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.registerAsync({
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
      providers: [AuthService, userService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should validate correct credentials', async () => {
    const result = await service.signIn('azim', 'changeme')
    expect(result).toBeNull();
  })
});
