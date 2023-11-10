import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { City } from "./City"
import { Address } from "./Address"

@Entity()
export class Country {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
     name: string   

    @Column()
    addressLine: string


    @ManyToOne(() => City, (city) => city.country)
    @JoinColumn()
    city: City

   
    @ManyToOne(() => Address, (address) => address.country)
    @JoinColumn()
    address: Address
}
