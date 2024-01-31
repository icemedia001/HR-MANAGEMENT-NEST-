import { Injectable, UnauthorizedException } from '@nestjs/common';
import { userService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: userService,
    private readonly jwtService: JwtService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  async login (user: any) {
    return this.jwtService.sign({
      sub: user.id,
      username: user.name
    })
  }
}