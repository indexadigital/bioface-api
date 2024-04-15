import { Injectable, NotFoundException } from '@nestjs/common';
//import { faker } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

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
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }
  /*
  users = [
    {
      id: faker.string.uuid(),
      username: 'greenwave',
      password: '532k%&j6yuy6JKYQIubsk$',
      role: Role.Admin,
    },
    {
      id: faker.string.uuid(),
      username: 'detran',
      password: 'dEt$35876ik#tjga2@RAN$',
      role: Role.Customer,
    },
  ];
  */

  async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {

    const {username, password} = authenticateDto

    try {
      const u = await this.findOne(username);

      if(!u) 
        return { user: null, token: null, message: 'Usuário não encontrado' };

      if ( u && !( u.username === username && u.password === password ) ) {
        return { user: null, token: null, message: 'Usuário ou senha incorreta.' };
      }

      const user = { id: u.id, username: u.username, role: u.role  } as UserDto;
      const token = sign({ ...user }, 'secrete');
      const message = 'Login bem-sucedido';  

      return { token, user, message};

    } catch (error) {
      console.log(error);
    }
   
  }
}
