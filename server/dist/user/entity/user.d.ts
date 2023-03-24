import { Loan } from "src/loan/entity/loan";
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    loans: Loan[];
}
