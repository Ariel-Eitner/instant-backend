// import {
//   UsersService,
//   UserCustomDocument,
//   UserCustomBase,
// } from "@ariel-eitner/instant-backend";
// import {
//   Injectable,
//   NotFoundException,
//   HttpStatus,
//   HttpException,
// } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";

// @Injectable()
// export class UsersCustomService extends UsersService {
//   constructor(
//     @InjectModel(UserCustomBase.name) userModel: Model<UserCustomDocument>
//   ) {
//     super(userModel);
//   }

//   // async createUser(
//   //   createUserDto: CreateUserCustomDto
//   // ): Promise<{ user: UserCustomBase; message: string }> {
//   //   return super.createUser(createUserDto);
//   // }

//   // async findAllUsers(): Promise<{ users: UserCustomBase[]; message: string }> {
//   //   return super.findAllUsers();
//   // }

//   // async findUserById(
//   //   id: string
//   // ): Promise<{ user: UserCustomBase; message: string }> {
//   //   return super.findUserById(id);
//   // }

//   // async findUserByEmail(
//   //   email: string
//   // ): Promise<{ user: UserCustomBase; message: string }> {
//   //   return super.findUserByEmail(email);
//   // }

//   // async updateUser(
//   //   id: string,
//   //   updateUserDto: UpdateUserDto
//   // ): Promise<{ user: UserCustomBase; message: string }> {
//   //   return super.updateUser(id, updateUserDto);
//   // }

//   // async deleteUser(id: string): Promise<{ message: string }> {
//   //   return super.deleteUser(id);
//   // }

//   // async findUsers(
//   //   query: Record<string, any>
//   // ): Promise<{ users: UserCustomBase[]; message: string }> {
//   //   return super.findUsers(query);
//   // }
// }
