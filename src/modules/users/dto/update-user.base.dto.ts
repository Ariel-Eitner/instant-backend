import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.base.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {}
