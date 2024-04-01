import { PartialType } from '@nestjs/swagger';
import { CreateTransacaoDto } from './create-transacao.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateTransacaoDto extends PartialType(CreateTransacaoDto) {

    @IsOptional()
    @IsString()
    token?: string;

    @IsOptional()
    @IsString()
    responseRaw?: string;

    @IsOptional()
    @IsString()
    status?: string;

}

    
