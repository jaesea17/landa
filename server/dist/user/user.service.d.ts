import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user';
import { LoginDto } from './dto/login.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUsers(): Promise<User[]>;
    createUser(user: UserDto): Promise<User>;
    loginUser(user: LoginDto): Promise<Record<string, unknown>>;
    deleteUsers(): Promise<string>;
}
