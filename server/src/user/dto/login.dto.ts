import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
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
