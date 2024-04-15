import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TokenService } from './token.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
import { CodeDto } from './dto/code.dto';

@ApiBearerAuth('token')
@ApiTags('token')
@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Roles('client', 'app', 'admin')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  checkCode(@Body() codeDto: CodeDto) {
    const { codeauth, cpf } = codeDto;
    return this.tokenService.checkCode(codeauth, cpf);
  }
}
