import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { generateToken } from 'src/utils/utils';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        // return await this.userRepository.query('SELECT * from users JOIN loans ON loans.userId = users.id')
        return await this.userRepository.find({});
    }

    async createUser(user: UserDto): Promise<User> {
        const existingUser = await this.userRepository.findOne({ where: { email: user.email } })
        if (existingUser) throw new HttpException("User already exists", HttpStatus.FOUND);
        const hashedPassword = await bcrypt.hash(user.password, 8);
        const newUser = { ...user, password: hashedPassword }
        await this.userRepository.save(newUser);
        return newUser as unknown as User;
    }

    async loginUser(user: LoginDto): Promise<Record<string, unknown>> {
        const existingUser = await this.userRepository.findOne({ where: { email: user.email } })
        if (!existingUser) throw new HttpException("Invalid Email or Password", HttpStatus.NOT_FOUND);
        const { id } = existingUser;
        const token = generateToken({ userId: id });
        const validUser = await bcrypt.compare(user.password, existingUser.password)
        if (!validUser) throw new HttpException("Invalid Email or Password", HttpStatus.NOT_FOUND);
        return { ...user, password: "", token };
    }

    async deleteUsers(): Promise<string> {
        // this.userRepository.query('DROP TABLE IF EXISTS users;');
        // this.userRepository.delete({})
        return "All users deleted successfully";
    }

}
