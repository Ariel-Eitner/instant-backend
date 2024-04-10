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
import { UsersService } from './users.custom.service';
import { CreateUserCustomDto } from './create-user.custom.dto';
import { UpdateUserDto } from './update-user.custom.dto';

@Controller('users')
export class UsersController {
  constructor(protected readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserCustomDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers() {
    return this.userService.findAllUsers();
  }
  @Get('search')
  async findUsers(@Query() query: Record<string, any>) {
    return this.userService.findUsers(query);
  }

  @Get(':id')
  async findUserById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Get('email/:email')
  async findUserByEmail(@Param('email') email: string) {
    return this.userService.findUserByEmail(email);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
