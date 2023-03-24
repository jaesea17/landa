import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanDto } from './dto/loan.dto';
import * as bcrypt from 'bcrypt';
import { Loan } from './entity/loan';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoanService {
    constructor(@InjectRepository(Loan) private loanRepository: Repository<Loan>) { }

    async getLoans(): Promise<Loan[]> {
        return await this.loanRepository.find({});
    }

    async getLoan(id: string): Promise<Loan> {
        const loan = await this.loanRepository.findOne({ where: { id }, relations: { user: true } });
        if (!loan) {
            throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
        }
        return loan;
    }

    async createLoan(loan: LoanDto): Promise<Loan> {
        const hashedBvn = await bcrypt.hash(loan.bvn, 8);
        const newLoan = { ...loan, bvn: hashedBvn };
        const query = `INSERT INTO loans (id, firstName, lastName, email, bvn, amount, userId) 
        VALUES ('${uuidv4()}','${loan.firstName}', '${loan.lastName}', '${loan.email}', '${loan.bvn}', ${loan.amount}, '${loan.userId}');`
        await this.loanRepository.query(query);
        // await this.loanRepository.save(newLoan);
        return newLoan as unknown as Loan;
    }

    async deleteLoans(): Promise<string> {
        // this.loanRepository.query('DROP TABLE IF EXISTS loans;');
        this.loanRepository.delete({})
        return "All loans deleted successfully";
    }

}
