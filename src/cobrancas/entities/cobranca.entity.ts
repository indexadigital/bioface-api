import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';


@Entity({name: 'cobrancas'})
export class Cobranca {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.cobrancas)
  usuario: Usuario;

  @Column({ nullable: true })
  refid?: string;

  @Column({ nullable: true })
  token?: string;

  @Column({ nullable: true })
  valor?: number;

  @Column({ nullable: true })
  totaltransacoes: number;

  @Column({ nullable: true })
  datavencimento?: Date;

  @Column({ nullable: true })
  dataexpiracao?: Date;

  @Column({ nullable: true })
  status?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;
}
