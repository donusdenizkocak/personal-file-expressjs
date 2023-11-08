import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm"
import { Address } from "./Address"
import { District } from "./District"
import { Country } from "./Country"

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Country, (country) => country.id)
    @JoinColumn()
    countyr: Country

    @OneToOne(() => District, (district) => district.town)
    district: District

    @OneToOne(() => Address, (address) => address.city)
    address: Address
}
