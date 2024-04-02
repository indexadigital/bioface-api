import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';


@Entity({name: 'documentos'})
export class Documento {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Usuario, usuario => usuario.documentos)
  usuario: Usuario;

  @Column({ nullable: true })
  nomecompleto?: string;

  @Column({ nullable: true })
  rg?: number;

  @Column({ nullable: true })
  orgaoexpedidor?: string;

  @Column({ nullable: true })
  estadoemissao?: string;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ nullable: true })
  datanascimento?: Date;

  @Column({ nullable: true })
  mae?: string;

  @Column({ nullable: true })
  pai?: string;

  @Column({ nullable: true })
  numseguranca?: number;

  @Column({ nullable: true })
  categoria?: string;

  @Column({ nullable: true })
  numregistro?: number;

  @Column({ nullable: true })
  validade?: Date;

  @Column({ nullable: true })
  primeirahabilitacao?: Date;

  @Column({ nullable: true })
  dataemissao?: Date;

  @Column({ nullable: true })
  cidadeemissao?: string;

  @Column({ nullable: true })
  observacao?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;
}
