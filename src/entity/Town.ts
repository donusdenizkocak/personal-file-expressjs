import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { City } from "./City"
import { District } from "./District"
import { Address } from "./Address"


@Entity()
export class Town {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => District, (district) => district.id)
    @JoinColumn()
    district: District

    @OneToMany(() => Address, (address) => address.town)
    address:Address
}
