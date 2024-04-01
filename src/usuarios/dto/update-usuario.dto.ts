import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {  
    @IsOptional()
    @IsString()
    senha?: string;

    @IsOptional()
    @IsString()
    email: string;
  
    @IsOptional()
    @IsString()
    dispositivo?: string;
  
    @IsOptional()
    @IsString()
    ip?: string;
}