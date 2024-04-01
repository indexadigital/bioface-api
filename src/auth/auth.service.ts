import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { sign } from 'jsonwebtoken';
import { AuthenticateDto } from './dto/authenticate.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';

@Injectable()
export class AuthService {
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

  authenticate(authenticateDto: AuthenticateDto): IAuthenticate {
    const user = this.users.find(
      (u) =>
        u.username === authenticateDto.username &&
        u.password === authenticateDto.password,
    );

    if (!user) throw new NotFoundException('Invalid credentials');

    const token = sign({ ...user }, 'secrete');

    return { token, user };
  }
}
