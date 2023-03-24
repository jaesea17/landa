import { Test, TestingModule } from '@nestjs/testing';
// import { User } from 'src/user/entity/user';
// import { Loan } from './entity/loan';
import { LoanService } from './loan.service';

describe('LoanService', () => {
  let service: LoanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoanService],
    }).compile();

    service = module.get<LoanService>(LoanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // describe('getAllLoans', () => {
  //   it('should return an array of users', async () => {
  //     let user: User;
  //     const loans: Loan[] = [{ id: '1', firstName: 'John', lastName: "Sim", email: 'john@example.com', bvn: '1234567890', amount: 1000, user }];
  //     jest.spyOn(service, 'getLoans').mockResolvedValue(loans);

  //     const result = await service.getLoans();
  //     expect(result).toEqual(loans);
  //   });
  // });
});
