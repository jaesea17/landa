"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const loan_1 = require("./entity/loan");
const uuid_1 = require("uuid");
let LoanService = class LoanService {
    constructor(loanRepository) {
        this.loanRepository = loanRepository;
    }
    async getLoans() {
        return await this.loanRepository.find({});
    }
    async getLoan(id) {
        const loan = await this.loanRepository.findOne({ where: { id }, relations: { user: true } });
        if (!loan) {
            throw new common_1.HttpException('NotFound', common_1.HttpStatus.NOT_FOUND);
        }
        return loan;
    }
    async createLoan(loan) {
        const hashedBvn = await bcrypt.hash(loan.bvn, 8);
        const newLoan = Object.assign(Object.assign({}, loan), { bvn: hashedBvn });
        const query = `INSERT INTO loans (id, firstName, lastName, email, bvn, amount, userId) 
        VALUES ('${(0, uuid_1.v4)()}','${loan.firstName}', '${loan.lastName}', '${loan.email}', '${loan.bvn}', ${loan.amount}, '${loan.userId}');`;
        await this.loanRepository.query(query);
        return newLoan;
    }
    async deleteLoans() {
        this.loanRepository.delete({});
        return "All loans deleted successfully";
    }
};
LoanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loan_1.Loan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoanService);
exports.LoanService = LoanService;
//# sourceMappingURL=loan.service.js.map