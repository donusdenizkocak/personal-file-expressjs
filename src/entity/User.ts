import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Phone } from "./Phone"
import { Address } from "./Address"
import { Email } from "./Email"


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    
    @OneToMany(() => Address, (address) => address.user)
    address: Address
    
    // @Column()
    // phone: string

    @OneToMany(() => Email, (email) => email.emailAddress)
    email: Email


    @OneToMany(() => Phone, (phone) => phone.user)
    phone: Phone

}
