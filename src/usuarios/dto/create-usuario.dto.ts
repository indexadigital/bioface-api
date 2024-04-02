import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  nomecompleto: string;

  @IsOptional()
  @IsString()
  dispositivo?: string;

  @IsOptional()
  @IsString()
  ip?: string;
}