import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";
 
    export class CreateContactDto {
        @IsString()
        @IsNotEmpty()
        @MinLength(3)
        name: string;
    
        @IsEmail()
        @IsNotEmpty()
        email: string;
    
        @IsString()
        @IsNotEmpty()
        @MinLength(8)
        telefone: string;
    }
