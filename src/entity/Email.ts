import { title } from "process"
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"


@Entity()
export class Email {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    emailType: string

    @Column()
    emailAddress: string


    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn()
    user: User
}
