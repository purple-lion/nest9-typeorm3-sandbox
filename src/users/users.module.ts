import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { userProvider } from './user.provider';
import { UserService } from './user.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProvider, UserService],
})
export class UsersModule {}
