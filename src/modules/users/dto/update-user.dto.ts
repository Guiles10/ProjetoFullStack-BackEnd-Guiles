// import { PartialType } from '@nestjs/swagger';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}


import { Transform } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength, IsOptional } from "class-validator";
import { hashSync } from 'bcryptjs'
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiProperty({
        description: 'Nome do Usuario',
        type: String,
        default: 'Felipe Silva',
        required: false
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(50)
    @IsOptional()
    name: string;

    @ApiProperty({
        description: 'Email do Usuario',
        type: String,
        default: 'felipe.silva@mail.com',
        required: false
    })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(50)
    @IsOptional()
    email: string;

    @ApiProperty({
        description: 'Telefone do Usuario',
        type: String,
        default: '55 99999 9999',
        required: false
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @IsOptional()
    telefone: string;

    @ApiProperty({
        description: 'Senha do Usuario',
        type: String,
        default: '12345678',
        required: false
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @IsOptional()
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