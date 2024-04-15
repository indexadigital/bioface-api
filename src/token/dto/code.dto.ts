import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CodeDto {

    @IsNotEmpty()
    @IsString()
    @Length(6)
    @ApiProperty({
        description: 'Código de 6 dígitos para o Aplicativo Mobile',
        minimum: 6,
        maximum: 6,
        default: '000000'
    })
    codeauth: string;

    @IsNotEmpty()
    @IsString()
    @Length(11)
    @ApiProperty({
        description: 'CPF do usuário',
        minimum: 11,
        maximum: 11,
        default: '99999999999'
    })
    cpf: string;
}
