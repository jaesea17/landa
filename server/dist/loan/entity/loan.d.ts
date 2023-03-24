import { User } from "src/user/entity/user";
export declare class Loan {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    bvn: string;
    amount: number;
    user: User;
}
