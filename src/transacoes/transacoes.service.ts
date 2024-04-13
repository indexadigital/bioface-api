import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transacao} from './entities/transacao.entity';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';

@Injectable()
export class TransacoesService {
  constructor(
    @InjectRepository(Transacao)
    private transacaoRepository: Repository<Transacao>,
  ) {}

  async create(createTransacaoDto: CreateTransacaoDto): Promise<Transacao> {
    const transacao = this.transacaoRepository.create(createTransacaoDto)
    return this.transacaoRepository.save(transacao);
  }

  async findAll(): Promise<Transacao[]> {
    return this.transacaoRepository.find();
  }

  async findOne(id: number): Promise<Transacao> {
    const transacao = await this.transacaoRepository.findOne({ where: { id: id } });
    if (!transacao) {
      throw new NotFoundException('Transação não encontrada');
    }
    return transacao;
  }

  async update(id: number, updateTransacaoDto: UpdateTransacaoDto): Promise<Transacao> {
    const transacao = await this.findOne(id);
    this.transacaoRepository.merge(transacao, updateTransacaoDto);
    return this.transacaoRepository.save(transacao);
  }

  async deleteTransacao(id: number): Promise<void> {
    const transacao = await this.findOne(id);
    await this.transacaoRepository.remove(transacao);
  }
}
