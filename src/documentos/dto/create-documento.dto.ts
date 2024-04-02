import { IsNotEmpty, IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreateDocumentoDto {
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;

  @IsOptional()
  @IsString()
  nomecompleto?: string;

  @IsOptional()
  @IsNumber()
  rg?: number;

  @IsOptional()
  @IsString()
  orgaoexpedidor?: string;

  @IsOptional()
  @IsString()
  estadoemissao?: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsOptional()
  @IsDateString()
  datanascimento?: string;

  @IsOptional()
  @IsString()
  mae?: string;

  @IsOptional()
  @IsString()
  pai?: string;

  @IsOptional()
  @IsNumber()
  numseguranca?: number;

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
  primeirahabilitacao?: string;

  @IsOptional()
  @IsDateString()
  dataemissao?: string;

  @IsOptional()
  @IsString()
  cidadeemissao?: string;

  @IsOptional()
  @IsString()
  observacao?: string;
}
