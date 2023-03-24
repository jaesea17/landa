import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";

export class LoanDto {
    @IsNotEmpty()
    @IsString()
    @Length(10)
    userId: string

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
    bvn: string

    @IsNotEmpty()
    @IsNumber()
    amount: number;
}
