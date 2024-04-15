import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'auth'})
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 25 })
  username: string;

  @Column({ length: 60 })
  password: string;

  @Column({ length: 10 })
  role: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

}
