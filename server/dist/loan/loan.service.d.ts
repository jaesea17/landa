import { Repository } from 'typeorm';
import { LoanDto } from './dto/loan.dto';
import { Loan } from './entity/loan';
export declare class LoanService {
    private loanRepository;
    constructor(loanRepository: Repository<Loan>);
    getLoans(): Promise<Loan[]>;
    getLoan(id: string): Promise<Loan>;
    createLoan(loan: LoanDto): Promise<Loan>;
    deleteLoans(): Promise<string>;
}
