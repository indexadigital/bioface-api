import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateTransacaoDto {
    @IsNotEmpty()
    @IsNumber()
    usuarioId: number;

    @IsOptional()
    @IsString()
    refId?: string;

    @IsOptional()
    @IsString()
    tipoTransacao?: string;

    @IsOptional()
    @IsString()
    token?: string;

    @IsOptional()
    @IsString()
    responseRaw?: string;

    @IsOptional()
    @IsString()
    codeAuth?: string;

    @IsOptional()
    @IsString()
    @IsDateString()
    expireAuth?: string;

    @IsOptional()
    @IsString()
    status?: string;

    @IsOptional()
    @IsString()
    ip?: string;
}
