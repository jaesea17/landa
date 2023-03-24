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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_1 = require("./entity/user");
const bcrypt = require("bcrypt");
const utils_1 = require("../utils/utils");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers() {
        return await this.userRepository.find({});
    }
    async createUser(user) {
        const existingUser = await this.userRepository.findOne({ where: { email: user.email } });
        if (existingUser)
            throw new common_1.HttpException("User already exists", common_1.HttpStatus.FOUND);
        const hashedPassword = await bcrypt.hash(user.password, 8);
        const newUser = Object.assign(Object.assign({}, user), { password: hashedPassword });
        await this.userRepository.save(newUser);
        return newUser;
    }
    async loginUser(user) {
        const existingUser = await this.userRepository.findOne({ where: { email: user.email } });
        if (!existingUser)
            throw new common_1.HttpException("Invalid Email or Password", common_1.HttpStatus.NOT_FOUND);
        const { id } = existingUser;
        const token = (0, utils_1.generateToken)({ userId: id });
        const validUser = await bcrypt.compare(user.password, existingUser.password);
        if (!validUser)
            throw new common_1.HttpException("Invalid Email or Password", common_1.HttpStatus.NOT_FOUND);
        return Object.assign(Object.assign({}, user), { password: "", token });
    }
    async deleteUsers() {
        return "All users deleted successfully";
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map