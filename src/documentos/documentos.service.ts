import { CreateDocumentoDto } from './dto/create-documento.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documento } from './entities/documento.entity';


@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(Documento)
    private documentoRepository: Repository<Documento>,
  ) {}

  async create(createDocumentoDto: CreateDocumentoDto): Promise<Documento> {
    return this.documentoRepository.save(createDocumentoDto);
  }

  async findAll(): Promise<Documento[]> {
    return this.documentoRepository.find();
  }

  async findOne(id: number): Promise<Documento> {
    const documento = await this.documentoRepository.findOne({ where: { id: id } });
    if (!documento) {
      throw new NotFoundException('Documento não encontrado');
    }
    return documento;
  }

  async remove(id: number): Promise<void> {
    const documento = await this.findOne(id);
    await this.documentoRepository.remove(documento);
  }
}
