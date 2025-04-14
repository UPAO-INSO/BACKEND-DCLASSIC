import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/common/interfaces/current-user.interfaces';
import { User, Token, Auth } from './decorators';
import { AuthGuard } from './guards/auth.guard';
import { Role } from 'generated/prisma';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.registerUser(registerUserDto);
  }

  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.loginUser(loginUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyToken(@User() user: CurrentUser, @Token() token: string) {
    return {
      message: 'Token is valid',
      user,
      token,
    };
  }

  @Post('refresh-token')
  refreshAccessToken(@User() user: CurrentUser) {
    return this.authService.refreshAccessToken(user.refreshToken);
  }

  // @ApiBearerAuth()
  // @Get('profile')
  // @Auth(Role.EMPLEADO)
  // profile(@ActiveUser() user: UserActiveInterface) {
  //   return this.authService.profile(user);
  // }
}
