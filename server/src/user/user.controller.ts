import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    async getUsers() {
        return await this.userService.getUsers()
    }

    @Post()
    async createUser(@Body() userDto: UserDto) {
        return await this.userService.createUser(userDto);
    }

    @Post('/login')
    async loginUser(@Body() loginDto: LoginDto) {
        return await this.userService.loginUser(loginDto)
    }

    @Delete()
    async deleteUsers() {
        return await this.userService.deleteUsers();
    }

}
