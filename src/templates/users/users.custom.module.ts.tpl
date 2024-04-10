import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCustomBase, UserCustomSchema } from './user.custom.schema';
import { UsersService } from './users.custom.service';
import { UsersController } from './users.custom.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserCustomBase.name, schema: UserCustomSchema },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
