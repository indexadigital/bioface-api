import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transacao } from 'src/transacoes/entities/transacao.entity';
import { Repository } from 'typeorm';
import { TokenDto } from './dto/token.dto';

export interface IToken {
  readonly data: TokenDto;
  readonly status: string;
}

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Transacao)
    private transacaoRepository: Repository<Transacao>,
  ) {}

  checkCodeExpire(transacao: Transacao){

    const expireAuth = new Date(transacao.created);
    expireAuth.setMinutes(expireAuth.getMinutes() + 5);

    const now = new Date();

    //console.log(now);
    //console.log(expireAuth);

    if (now > expireAuth) {
      return false;
    }

    return true;
  }

  async checkCode(codeauth: string, cpf: string): Promise<IToken> {
    const transacao = await this.transacaoRepository.findOne({ where: { codeauth: codeauth, refid: cpf } });

    if (!transacao) {
      return { data: null, status: 'NOTFOUND' };
    }

    const token = {
        refid: transacao.refid,
        tipotransacao: transacao.tipotransacao,
        token: transacao.token,
        codeauth: transacao.codeauth
    } as TokenDto;

    if(this.checkCodeExpire(transacao)) {     
      return { data: token, status: 'ACTIVE' };
    } else {
      return { data: null, status: 'EXPIRED' };      
    }
  }
}
