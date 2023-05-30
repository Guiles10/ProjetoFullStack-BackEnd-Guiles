import { Transform } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength } from "class-validator";
import { hashSync } from 'bcryptjs'
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do Usuario',
        type: String,
        default: 'Felipe Silva'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(50)
    name: string;

    @ApiProperty({
        description: 'Email do Usuario',
        type: String,
        default: 'felipe.silva@mail.com'
    })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(50)
    email: string;

    @ApiProperty({
        description: 'Telefone do Usuario',
        type: String,
        default: '55 99999 9999'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    telefone: string;

    @ApiProperty({
        description: 'Senha do Usuario',
        type: String,
        default: '12345678'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Transform(({value}: {value: string}) => hashSync(value, 10), {
        groups: ['transform']
    })
    password: string;

    // @IsString()
    // @IsNotEmpty()
    // @MinLength(8)
    // @Transform(({value}: {value: string}) => hashSync(value, 10), {
    //     groups: ['transform']
    // })
    // @Match('password')
    // passwordConfirm: string;

}
