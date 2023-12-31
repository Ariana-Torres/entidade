import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from './product.entity';

@Entity()
export class ProductImage {
    @PrimaryGeneratedColumn({ type: 'int4'})
    id: number;

    @Column({ type: 'varchar', nullable: true})
    url: string;

//relacion que se llame product
//Muachas imagenes tiene muchos productos
    @ManyToOne(() => Product, (product) => product.images, { 
        onDelete: 'CASCADE',
    })
    product: Product; 
}