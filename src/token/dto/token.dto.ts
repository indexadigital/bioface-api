import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class TokenDto {

    @IsOptional()
    @IsString()
    refid?: string;

    @IsOptional()
    @IsString()
    tipotransacao?: string;

    @IsOptional()
    @IsString()
    token?: string;

    @IsNotEmpty()
    @IsString()
    codeauth: string;
}
