import {
  Injectable,
  NotFoundException,
  HttpStatus,
  HttpException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  UserBase,
  UserBaseDocument,
} from "../../orms/mongoose/schemas/user.base.schema";
import { CreateUserDto } from "./dto/create-user.base.dto";
import { UpdateUserDto } from "./dto/update-user.base.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserBase.name) protected userModel: Model<UserBaseDocument>
  ) {}

  async createUser(
    createUserDto: CreateUserDto
  ): Promise<{ user?: UserBase; message: string }> {
    try {
      const existingUser = await this.userModel
        .findOne({ email: createUserDto.email.toLowerCase() })
        .exec();
      if (existingUser) {
        throw new HttpException(
          "User with this email already exists",
          HttpStatus.CONFLICT
        );
      }

      const newUser = new this.userModel(createUserDto);
      await newUser.save();
      return { user: newUser, message: "User successfully created." };
    } catch (error) {
      // Verificar si el error es una violación del índice único
      if (error.code === 11000) {
        // MongoDB puede devolver la información del campo que causó la violación en error.keyValue
        const field = Object.keys(error.keyValue)[0];
        const value = error.keyValue[field];
        throw new HttpException(
          `${field} '${value}' already exists.`,
          HttpStatus.CONFLICT
        );
      }

      // Manejo de errores de validación de Mongoose (como se explicó anteriormente)
      if (
        typeof error === "object" &&
        error !== null &&
        "name" in error &&
        error["name"] === "ValidationError"
      ) {
        const validationError = error as {
          errors: Record<string, { message: string }>;
        };
        const messages = Object.values(validationError.errors).map(
          (err) => err.message
        );
        throw new HttpException(
          { message: "Validation failed", errors: messages },
          HttpStatus.BAD_REQUEST
        );
      }

      // Para otros errores no capturados específicamente, lanzar como error del servidor
      throw new HttpException(
        "An unexpected error occurred",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAllUsers(): Promise<{ users: UserBase[]; message: string }> {
    const users = await this.userModel.find().exec();
    return { users, message: "Users found successfully." };
  }

  async findUserById(id: string): Promise<{ user: UserBase; message: string }> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return { user, message: "User found successfully." };
  }

  async findUserByEmail(
    email: string
  ): Promise<{ user: UserBase; message: string }> {
    const user = await this.userModel
      .findOne({ email: email.toLowerCase() })
      .exec();
    if (!user) {
      throw new NotFoundException(`User with email "${email}" not found`);
    }
    return { user, message: "User found successfully by email." };
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<{ user: UserBase; message: string }> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return { user: updatedUser, message: "User updated successfully." };
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    const result = await this.userModel.findByIdAndDelete({ _id: id }).exec();
    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { message: "User deleted successfully." };
  }

  async findUsers(
    query: Record<string, any>
  ): Promise<{ users: UserBase[]; message: string }> {
    const users = await this.userModel.find(query).exec();
    return { users, message: "Users found successfully with given query." };
  }
}
