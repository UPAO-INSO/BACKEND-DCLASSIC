import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { RegisterUserDto } from './dto/register-user.dto';
import { JwTPayload } from './interfaces/jwt-payload.interface';
import { envs } from 'src/config/envs';
import { LoginUserDto } from './dto';
import { UsersService } from 'src/users/users.service';
import { CurrentUser } from '../common/interfaces/current-user.interfaces';

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
  private readonly logger: Logger = new Logger('AuthService');

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('MySQL connected');
  }

  private async generateAccessToken(payload: any) {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: '15m', // Expira en 15 minutos
    });
  }

  // Función para generar refresh token
  private async generateRefreshToken(payload: any) {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d', // Expira en 7 días
    });
  }

  async signJWT(payload: JwTPayload) {
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    try {
      this.logger.debug('Verifying token...');
      const { sub, iat, exp, ...user } = this.jwtService.verify(token, {
        secret: envs.jwtAccessSecret,
      });

      const expiresIn = exp * 1000 - Date.now();

      let newToken = token;

      this.logger.debug('expiresIn: ' + expiresIn);

      if (expiresIn < 15 * 60 * 1000) {
        newToken = await this.signJWT({ ...user });
      }

      this.logger.debug('newToken: ' + newToken);

      return {
        user: {
          ...user,
          id: sub,
        },
        token: newToken,
      };
    } catch (error) {
      throw new InternalServerErrorException('Invalid token: ', error.message);
    }
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    // const { email, password, name } = registerUserDto;

    try {
      const user = await this.usersService.create(registerUserDto);

      const payload = { id: user.id, email: user.email, role: user.role };
      const accessToken = await this.generateAccessToken(payload);
      const refreshToken = await this.generateRefreshToken(payload);

      const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

      await this.user.update({
        where: { id: user.id },
        data: { refreshToken: hashedRefreshToken },
      });

      console.log('token', refreshToken);
      console.log('hashed', hashedRefreshToken);

      const { password: _, refreshToken: __, ...rest } = user;

      return {
        user: rest,
        accessToken,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error creating user: ',
        error.message,
      );
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    try {
      const user = await this.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException('User/Password incorrectos');
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        throw new NotFoundException('User/Password incorrectos');
      }

      const payload = { id: user.id, email: user.email, role: user.role };

      const accessToken = await this.generateAccessToken(payload);
      const refreshToken = await this.generateRefreshToken(payload);

      const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

      await this.user.update({
        where: { id: user.id },
        data: { refreshToken: hashedRefreshToken },
      });

      const { password: __, refreshToken: _, ...rest } = user;

      return {
        user: rest,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error logging', error.message);
    }
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      // Busca al usuario y verifica que el token coincida
      const user = await this.usersService.findOne(payload.id);

      if (!user || !(await bcrypt.compare(refreshToken, user.refreshToken))) {
        throw new UnauthorizedException(
          'Invalid refresh token or user not found',
        );
      }

      return this.generateAccessToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(userId: number) {
    await this.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }
}
