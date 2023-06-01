import { IsString, IsNotEmpty, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
 
    export class LoginDto {
        @IsEmail()
        @ApiProperty()
        email: string;

        @IsString()
        @ApiProperty()
        password: string;
    }