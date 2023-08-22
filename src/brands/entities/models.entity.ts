import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Brand } from './brand.entity';

@Entity()
export class Model {
  @PrimaryGeneratedColumn({ type: 'int4' }) //este decorador hace referencia al primaty key
  id?: number;

  @Column({ type: 'int8', nullable: false })
  marca_id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({ type: 'int', nullable: false })
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
  })
  autor: User;

  @ManyToOne(() => Brand)
  @JoinColumn({
    name: 'marca_id',
    referencedColumnName: 'id',
  })
  marca: Brand;
}
