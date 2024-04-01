import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cobranca } from './entities/cobranca.entity';
import { CreateCobrancaDto } from './dto/create-cobranca.dto';
import { UpdateCobrancaDto } from './dto/update-cobranca.dto';

@Injectable()
export class CobrancasService {
  constructor(
    @InjectRepository(Cobranca)
    private cobrancaRepository: Repository<Cobranca>,
  ) {}

  async create(createCobrancaDto: CreateCobrancaDto): Promise<Cobranca> {
    return this.cobrancaRepository.save(createCobrancaDto);
  }

  async findAll(): Promise<Cobranca[]> {
    return this.cobrancaRepository.find();
  }

  async findOne(id: number): Promise<Cobranca> {
    const cobranca = await this.cobrancaRepository.findOne({ where: { id: id } });
    if (!cobranca) {
      throw new NotFoundException('Cobrança não encontrada');
    }
    return cobranca;
  }

  async update(id: number, updateCobrancaDto: UpdateCobrancaDto): Promise<Cobranca> {
    const cobranca = await this.findOne(id);
    this.cobrancaRepository.merge(cobranca, updateCobrancaDto);
    return this.cobrancaRepository.save(cobranca);
  }

  async remove(id: number): Promise<void> {
    const cobranca = await this.findOne(id);
    await this.cobrancaRepository.remove(cobranca);
  }
}
