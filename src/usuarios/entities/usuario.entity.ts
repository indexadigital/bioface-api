import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Documento } from 'src/documentos/entities/documento.entity';
import { Transacao} from 'src/transacoes/entities/transacao.entity';
import { Cobranca } from 'src/cobrancas/entities/cobranca.entity';

@Entity({name: 'usuarios'})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ length: 50 })
  senha: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  nomecompleto: string;

  @Column({ length: 20, nullable: true })
  dispositivo?: string;

  @Column({ nullable: true })
  ip?: string;

  @OneToOne(() => Documento, documento => documento.usuario)
  documentos: Documento[];

  @OneToMany(() => Transacao, transacao => transacao.usuario)
  transacao: Transacao[];

  @OneToMany(() => Cobranca, cobranca => cobranca.usuario)
  cobrancas: Cobranca[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;
}
