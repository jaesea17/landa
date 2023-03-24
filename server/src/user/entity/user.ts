import { Loan } from "src/loan/entity/loan";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Loan, loan => loan.user, { eager: true, onUpdate: 'CASCADE', onDelete: "CASCADE" })
    loans: Loan[]

}