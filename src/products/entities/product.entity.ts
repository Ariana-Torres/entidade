import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Category } from './category.entity';
<<<<<<< HEAD
import { Supplier } from './supplier.entity';
=======
>>>>>>> 095d1e43116bb79b2c83ccdf095b04e721507797

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ type: 'int4' }) //este decorador hace referencia al primaty key
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  price: number;

  @Column({ type: 'int8', nullable: false })
  stock: number;

  @Column({ type: 'int4', nullable: false })
  user_id: number;

  @Column({ type: 'int4', nullable: false })
  categoria_id: number;

  @Column({ type: 'varchar', nullable: false })
  filename: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  //relaciones
  //relaciones de muchos a uno
  @ManyToOne(() => User)
  @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id', //este es el id del usuario
  })
  autor: User;
<<<<<<< HEAD

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'category_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id', //este es el id del usuario
  })
  categoria: Category;

  @ManyToOne(() => Supplier)
  @JoinColumn({
    name: 'supplier_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id', //este es el id del usuario
  })
  proveedor: Supplier;
=======
//relacion con la tabla Categoria en producto
  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'categoria_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id', //este es el id del usuario
  })
  categoria: Category;
>>>>>>> 095d1e43116bb79b2c83ccdf095b04e721507797
}
