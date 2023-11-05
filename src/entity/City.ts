import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { User } from "./User"
import { Address } from "./Address"
import { District } from "./District"

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToOne(() => District, (district) => district.id)
    district: District

    @OneToOne(() => Address, (address) => address.id)
    address: Address
}
