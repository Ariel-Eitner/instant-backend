import { PartialType } from "@nestjs/mapped-types";
import { CreateUserCustomDto } from "./create-user.custom.dto";

export class UpdateUserDto extends PartialType(CreateUserCustomDto) {}
