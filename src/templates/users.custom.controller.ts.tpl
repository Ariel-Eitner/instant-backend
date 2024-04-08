import { UsersController } from '@ariel-eitner/instant-backend';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersCustomService } from './users.custom.service';

@Controller('users')
export class UsersCustomController extends UsersController {
  constructor(protected readonly userService: UsersCustomService) {
    super(userService);
  }

  // @Post()
  // async createUser(@Body() createUserDto: CreateUserCustomDto) {
  //   return super.createUser(createUserDto);
  // }

  // @Get()
  // async findAllUsers() {
  //   return super.findAllUsers();
  // }

  // @Get(':id')
  // async findUserById(@Param('id') id: string) {
  //   return super.findUserById(id);
  // }

  // @Get('email/:email')
  // async findUserByEmail(@Param('email') email: string) {
  //   return super.findUserByEmail(email);
  // }

  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return super.updateUser(id, updateUserDto);
  // }

  // @Delete(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // async deleteUser(@Param('id') id: string) {
  //   return super.deleteUser(id);
  // }

  // @Get('search')
  // async findUsers(@Query() query: Record<string, any>) {
  //   return super.findUsers(query);
  // }
}
