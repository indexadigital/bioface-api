import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateCobrancaDto {
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsOptional()
  @IsString()
  refId?: string;

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
