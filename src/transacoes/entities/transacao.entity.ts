import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity()
export class Transacao{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.transacoes)
  usuario: Usuario;

  @Column({ nullable: true })
  refId?: string;

  @Column({ nullable: true })
  tipoTransacao?: string;

  @Column({ nullable: true })
  token?: string;

  @Column({ nullable: true })
  responseRaw?: string;

  @Column({ nullable: true })
  codeAuth?: string;

  @Column({ nullable: true })
  expireAuth?: Date;

  @Column({ nullable: true })
  status?: string;

  @Column({ nullable: true })
  ip?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;
}
