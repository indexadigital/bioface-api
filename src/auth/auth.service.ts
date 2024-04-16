import { Injectable, NotFoundException } from '@nestjs/common';
//import { faker } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { createHash } from 'node:crypto'

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async findAll(): Promise<Auth[]> {
    return this.authRepository.find();
  }

  async findOne(username: string): Promise<Auth> {
    const user = await this.authRepository.findOne({ where: { username: username } });
    if (!user) {
      return null;
    }
    return user;
  }

  hashMD5(content: string) {  
    return createHash('md5').update(content).digest('hex')
  }

  async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {

    const {username, password} = authenticateDto

    try {
      const usuario = await this.findOne(username);

      if(!usuario) {
        return { user: null, token: null, message: 'Usuário não encontrado.' };
      }

      if ( usuario && !( usuario.username === username && usuario.password === this.hashMD5(password) ) ) {
        return { user: null, token: null, message: 'Usuário ou senha incorreta.' };
      }

      const user = { id: usuario.id, username: usuario.username, role: usuario.role  } as UserDto;
      const token = sign({ ...user }, 'secrete');
      const message = 'Login bem-sucedido.';  

      return { token, user, message};

    } catch (error) {
      console.log(error);
    }
   
  }
}
