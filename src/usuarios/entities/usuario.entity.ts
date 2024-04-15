import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany, OneToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Documento } from 'src/documentos/entities/documento.entity';
import { Transacao} from 'src/transacoes/entities/transacao.entity';
import { Cobranca } from 'src/cobrancas/entities/cobranca.entity';
@Entity({name: 'usuarios'})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ length: 60 })
  senha: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    this.senha = await bcrypt.hash(this.senha, salt);
  }

  @Column({ length: 255 })
  email: string;

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
