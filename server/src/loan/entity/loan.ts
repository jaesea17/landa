import { User } from "src/user/entity/user";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'loans' })
export class Loan {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    bvn: string;

    @Column()
    amount: number;

    @ManyToOne(() => User, user => user.loans)
    @JoinColumn({ name: 'userId' })
    user: User;

}