import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateDocumentoDto {
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsOptional()
  @IsString()
  nomeCompleto?: string;

  @IsOptional()
  @IsNumber()
  rg?: number;

  @IsOptional()
  @IsString()
  orgaoExpedidor?: string;

  @IsOptional()
  @IsString()
  estadoEmissao?: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsDateString()
  dataNascimento?: string;

  @IsOptional()
  @IsString()
  mae?: string;

  @IsOptional()
  @IsString()
  pai?: string;

  @IsOptional()
  @IsNumber()
  numSeguranca?: number;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsNumber()
  numRegistro?: number;

  @IsOptional()
  @IsDateString()
  validade?: string;

  @IsOptional()
  @IsDateString()
  primeiraHabilitacao?: string;

  @IsOptional()
  @IsDateString()
  dataEmissao?: string;

  @IsOptional()
  @IsString()
  cidadeEmissao?: string;

  @IsOptional()
  @IsString()
  observacao?: string;
}
