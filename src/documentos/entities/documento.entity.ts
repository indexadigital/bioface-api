import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity()
export class Documento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.documentos)
  usuario: Usuario;

  @Column({ nullable: true })
  nomeCompleto?: string;

  @Column({ nullable: true })
  rg?: number;

  @Column({ nullable: true })
  orgaoExpedidor?: string;

  @Column({ nullable: true })
  estadoEmissao?: string;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ nullable: true })
  dataNascimento?: Date;

  @Column({ nullable: true })
  mae?: string;

  @Column({ nullable: true })
  pai?: string;

  @Column({ nullable: true })
  numSeguranca?: number;

  @Column({ nullable: true })
  categoria?: string;

  @Column({ nullable: true })
  numRegistro?: number;

  @Column({ nullable: true })
  validade?: Date;

  @Column({ nullable: true })
  primeiraHabilitacao?: Date;

  @Column({ nullable: true })
  dataEmissao?: Date;

  @Column({ nullable: true })
  cidadeEmissao?: string;

  @Column({ nullable: true })
  observacao?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;
}
