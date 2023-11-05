import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { User } from "./User"
import { City } from "./City"

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    addressType: string   //EV İS TATİL

    @Column()
    addressLine: string


    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn()
    user: User

    @ManyToOne(() => City, (city) => city.id)
    @JoinColumn()
    city: City
}
