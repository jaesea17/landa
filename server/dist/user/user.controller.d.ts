import { LoginDto } from './dto/login.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entity/user").User[]>;
    createUser(userDto: UserDto): Promise<import("./entity/user").User>;
    loginUser(loginDto: LoginDto): Promise<Record<string, unknown>>;
    deleteUsers(): Promise<string>;
}
