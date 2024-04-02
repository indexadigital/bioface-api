import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateCobrancaDto {
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsOptional()
  @IsString()
  refid?: string;

  @IsOptional()
  @IsString()
  token?: string;

  @IsOptional()
  @IsNumber()
  valor?: number;

  @IsNotEmpty()
  @IsNumber()
  totaltransacoes: number;

  @IsOptional()
  @IsDateString()
  datavencimento?: string;

  @IsOptional()
  @IsDateString()
  dataexpiracao?: string;

  @IsOptional()
  @IsString()
  status?: string;
}
