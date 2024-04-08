import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCustomBase, UserCustomSchema } from './user.custom.schema';
import { UsersCustomService } from '../users/users.custom.service';
import { UsersCustomController } from './users.custom.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserCustomBase.name, schema: UserCustomSchema },
    ]),
  ],
  providers: [UsersCustomService],
  controllers: [UsersCustomController],
})
export class UsersModule {}
