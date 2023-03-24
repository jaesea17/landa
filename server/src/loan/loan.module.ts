import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entity/loan';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';

@Module({
  controllers: [LoanController],
  providers: [LoanService],
  imports: [TypeOrmModule.forFeature([Loan])]
})
export class LoanModule { }
