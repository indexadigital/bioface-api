import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateTransacaoDto {
    @IsNotEmpty()
    @IsNumber()
    usuarioId: number;

    @IsOptional()
    @IsString()
    refid?: string;

    @IsOptional()
    @IsString()
    tipotransacao?: string;

    @IsOptional()
    @IsString()
    token?: string;

    @IsOptional()
    @IsString()
    responseraw?: string;

    @IsOptional()
    @IsString()
    codeauth?: string;

    @IsOptional()
    @IsString()
    @IsDateString()
    expireauth?: string;

    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    @IsString()
    ip?: string;
}
