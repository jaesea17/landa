import { LoanDto } from './dto/loan.dto';
import { LoanService } from './loan.service';
export declare class LoanController {
    private loanService;
    constructor(loanService: LoanService);
    getLoans(): Promise<import("./entity/loan").Loan[]>;
    getBook(id: string): Promise<import("./entity/loan").Loan>;
    createLoan(loanDto: LoanDto): Promise<import("./entity/loan").Loan>;
    deleteUsers(): Promise<string>;
}
