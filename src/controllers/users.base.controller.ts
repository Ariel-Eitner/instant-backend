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
} from "@nestjs/common";

import { CreateUserDto } from "../dto/create-user.base.dto";
import { UpdateUserDto } from "../dto/update-user.base.dto";
import { UsersService } from "../services/users.base.service";

@Controller("users")
export class UsersController {
  constructor(protected readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(":id")
  async findUserById(@Param("id") id: string) {
    return this.userService.findUserById(id);
  }

  @Get("email/:email")
  async findUserByEmail(@Param("email") email: string) {
    return this.userService.findUserByEmail(email);
  }

  @Put(":id")
  async updateUser(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }

  @Get("search")
  async findUsers(@Query() query: Record<string, any>) {
    return this.userService.findUsers(query);
  }
}
