import { Module } from '@nestjs/common';
import { userService } from './user.service';

@Module({
    providers: [userService],
    exports: [userService],
})
export class UserModule {}
