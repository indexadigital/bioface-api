import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';


@Entity({name: 'transacoes'})
export class Transacao{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.transacoes)
  usuario: Usuario;

  @Column({ nullable: true })
  refid?: string;

  @Column({ nullable: true })
  tipotransacao?: string;

  @Column({ nullable: true })
  token?: string;

  @Column({ nullable: true })
  responseraw?: string;

  @Column({ nullable: true })
  codeauth?: string;

  @Column({ nullable: true })
  expireauth?: Date;

  @Column({ nullable: true })
  status?: string;

  @Column({ nullable: true })
  ip?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;
}
