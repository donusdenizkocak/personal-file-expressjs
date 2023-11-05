import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phoneType: string

    @Column()
    phoneNumber: string

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn()
    user: User
}
