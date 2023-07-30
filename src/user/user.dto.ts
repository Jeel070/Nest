import {IsEmail,IsString} from 'class-validator'
import { ApiProperty} from '@nestjs/swagger'

export class UserDto{
    @ApiProperty({ description: "please enter your name" })
    @IsString()
    name?: string

    @ApiProperty({ description: "please enter your email id" })
    @IsEmail()
    email:string

    @ApiProperty({ description: "please enter your details" })
    @IsString()
    details:string
}