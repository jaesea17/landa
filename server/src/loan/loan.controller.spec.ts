import { Test, TestingModule } from '@nestjs/testing';
// import { User } from 'src/user/entity/user';
// import { Loan } from './entity/loan';
import { LoanController } from './loan.controller';

describe('LoanController', () => {
  let controller: LoanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanController],
    }).compile();

    controller = module.get<LoanController>(LoanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  // describe('getAllLoans', () => {
  //   it('should return an array of users', async () => {
  //     let user: User;
  //     const loans: Loan[] = [{ id: '1', firstName: 'John', lastName: "Sim", email: 'john@example.com', bvn: '1234567890', amount: 1000, user }];
  //     jest.spyOn(controller, 'getLoans').mockResolvedValue(loans);

  //     const result = await controller.getLoans();
  //     expect(result).toEqual(loans);
  //   });
  // });
});
