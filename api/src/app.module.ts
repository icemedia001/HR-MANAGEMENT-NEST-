import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptions } from './typeorm/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    AuthModule, 
    UserModule, 
    TypeOrmModule.forRoot(TypeOrmOptions)],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    UserService],
})
export class AppModule {}
