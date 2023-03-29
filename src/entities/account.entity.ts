import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    accountNumber: string

    @Column()
    balance: number
}