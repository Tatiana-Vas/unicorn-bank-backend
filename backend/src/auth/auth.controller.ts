import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JoinChildDto } from './dto/join-child.dto';
import { ChildLoginDto } from './dto/child-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('child/join')
  async joinChild(@Body() joinChildDto: JoinChildDto) {
    return this.authService.joinChild(joinChildDto);
  }

  @Post('child/login')
  async childLogin(@Body() childLoginDto: ChildLoginDto) {
    return this.authService.childLogin(childLoginDto);
  }

  @Post('logout')
  async logout() {
    // This would need the user ID from the token
    return { message: 'Logout endpoint placeholder' };
  }
}