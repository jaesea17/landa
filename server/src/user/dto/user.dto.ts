import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    password: string
}
