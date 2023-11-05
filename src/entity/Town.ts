import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm"
import { City } from "./City"
import { District } from "./District"


@Entity()
export class Town {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => District, (district) => district.id)
    @JoinColumn()
    district: District
}
