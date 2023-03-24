import { Body, Controller, Delete, Get, Post, ParseUUIDPipe, Param } from '@nestjs/common';
import { LoanDto } from './dto/loan.dto';
import { LoanService } from './loan.service';

@Controller('loan')
export class LoanController {
    constructor(private loanService: LoanService) { }

    @Get()
    async getLoans() {
        return await this.loanService.getLoans()
    }

    @Get('/:id')
    async getBook(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.loanService.getLoan(id)
    }

    @Post()
    async createLoan(@Body() loanDto: LoanDto) {
        return await this.loanService.createLoan(loanDto);
    }

    @Delete()
    async deleteUsers() {
        return await this.loanService.deleteLoans();
    }

}
