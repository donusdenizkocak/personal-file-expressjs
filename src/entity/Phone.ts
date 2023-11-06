import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { User } from "./User"


enum type {JOB="iş",HOME="ev"}

@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"enum",enum:type, default:type.HOME})
    phoneType: type  

    @Column()
    phoneNumber: string

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn()
    user: User
}
