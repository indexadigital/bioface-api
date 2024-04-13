import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity({name: 'transacoes'})
export class Transacao{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.transacao)
  usuario: Usuario;

  @Column({ nullable: true })
  usuarioId: number;

  @BeforeInsert()
  @BeforeUpdate()
  async setUsuarioId(): Promise<void> {
    if (this.usuario) {
      this.usuarioId = this.usuario.id;
    }
  }

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

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    const authCode = Math.floor(100000 + Math.random() * 900000);
    this.codeauth = authCode.toString(); 
  }

  @Column({ nullable: true, type: 'timestamp', default: () => "CURRENT_TIMESTAMP + INTERVAL '5 Minutes'" })
  expireauth?: Date;

  @Column({ nullable: true })
  status?: string;

  @Column({ nullable: true })
  ip?: string;

  @BeforeInsert()
  @BeforeUpdate()
  async setIpAddress(request: Request): Promise<void> {
    const ipAddress = request.headers['x-forwarded-for'] || request.headers['x-real-ip'];
    this.ip = ipAddress;
  }

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

}
