import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class FindUsuarioDto {
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  nomeCompleto: string;
}