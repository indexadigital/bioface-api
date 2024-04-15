import { IsNotEmpty, IsString } from 'class-validator';

export class FindUsuarioDto {
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}