import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';

@Entity()
export class UserImage {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', nullable: true })
  url: string;

  //relacion que se llame users
  //Muachas imagenes tiene muchos productos
  @ManyToOne(() => User, (User) => User.images, {
    onDelete: 'CASCADE',
  })
  user: User;
}
