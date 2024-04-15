import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {

    try {
      const usuario = this.usuarioRepository.create(createUsuarioDto);
      return await this.usuarioRepository.save(usuario);
    } catch (error) {
      if (error.code === '23505') { 
        throw new HttpException('CPF já cadastrado', HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException('Erro interno', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id: id } });
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    this.usuarioRepository.merge(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }

  async login(cpf: string, senha: string): Promise<{ usuario: Usuario | null, message: string }> {
    try {
      const usuario = await this.usuarioRepository.findOne({ where: { cpf: cpf } });
  
      if (!usuario) { // Usuário não encontrado
        return { usuario: null, message: 'Usuário ou senha incorreta.' };
      }
  
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  
      if (!senhaCorreta) { // Senha incorreta
        return { usuario: null, message: 'Senha ou usuário incorreto.' };
      }
  
      return { usuario, message: 'Login bem-sucedido' };
    } catch (error) {
      console.error('Erro durante o login:', error);
      throw error; // Lançar erro para tratamento adequado
    }
  }
  
}