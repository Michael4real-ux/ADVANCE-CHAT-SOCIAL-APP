import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Routes, Services } from '../utils/types';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }

  @Post('login')
  login() {
    return 'hello';
  }

  @Get('satus')
  status() {
    return 'heloo';
  }

  @Get('logout')
  logout() {
    return 'hello';
  }
}
