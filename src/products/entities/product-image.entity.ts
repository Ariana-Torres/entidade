import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductImage {
    @PrimaryGeneratedColumn({ type: 'int4'})
    id: number;

    @Column({ type: 'int4', nullable: true})
    url: string;

}