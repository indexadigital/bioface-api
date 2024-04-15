import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../interfaces/user.interface';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly role: Role;
}
