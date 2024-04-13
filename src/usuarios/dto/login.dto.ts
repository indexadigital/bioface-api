import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto';
import { PartialType } from '@nestjs/swagger';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  readonly cpf: string;

  @IsNotEmpty()
  @IsString()
  readonly senha: string;

}
