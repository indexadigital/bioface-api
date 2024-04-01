import { PartialType } from '@nestjs/swagger';
import { CreateCobrancaDto } from './create-cobranca.dto';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class UpdateCobrancaDto extends PartialType(CreateCobrancaDto) {

  @IsOptional()
  @IsString()
  token?: string;

  @IsOptional()
  @IsNumber()
  valor?: number;

  @IsNotEmpty()
  @IsNumber()
  totalTransacoes: number;

  @IsOptional()
  @IsDateString()
  dataVencimento?: string;

  @IsOptional()
  @IsDateString()
  dataExpiracao?: string;

  @IsOptional()
  @IsString()
  status?: string;
}

