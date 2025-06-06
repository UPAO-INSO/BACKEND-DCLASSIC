import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient } from './../../generated/prisma';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { RegisterUserDto } from './dto/register-user.dto';
import { JwTPayload } from './interfaces/jwt-payload.interface';
import { envs } from 'src/config/envs';
import { LoginUserDto } from './dto';
import { UsersService } from 'src/users/users.service';

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

  private async generateAccessToken(payload: JwTPayload) {
    return await this.signJWT(payload, envs.jwtAccessSecret, '15m');
  }

  private async generateRefreshToken(payload: JwTPayload) {
    return await this.signJWT(payload, envs.jwtRefreshSecret, '1d');
  }

  private async signJWT(
    payload: JwTPayload,
    secret: string,
    expiresIn: string,
  ) {
    try {
      return this.jwtService.sign(payload, { secret, expiresIn });
    } catch (error) {
      throw new InternalServerErrorException(
        'Error al firmar token: ',
        error.message,
      );
    }
  }

  async verifyToken(token: string) {
    const { sub, iat, exp, ...user } = this.jwtService.verify<
      JwTPayload & { iat: number; exp: number }
    >(token, {
      secret: envs.jwtAccessSecret,
    });

    const expiresIn = exp * 1000 - Date.now();

    const payload: JwTPayload = { sub, ...user };

    let newToken = token;

    // Solo renueva si faltan menos de 2 minutos
    if (expiresIn < 2 * 60 * 1000) {
      newToken = await this.generateAccessToken(payload);
    }

    return {
      user: {
        ...user,
        id: sub,
      },
      token: newToken,
    };
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    const user = await this.usersService.create(registerUserDto);

    if (!user) throw new InternalServerErrorException('Error creating user');

    const payload: JwTPayload = {
      sub: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    const accessToken = await this.generateAccessToken(payload);
    const refreshToken = await this.generateRefreshToken(payload);

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    await this.user.update({
      where: { id: user.id },
      data: { refreshToken: hashedRefreshToken },
    });

    const { password: _, refreshToken: __, ...rest } = user;

    return {
      user: rest,
      accessToken,
    };
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('User/Password incorrectos');
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      throw new NotFoundException('User/Password incorrectos');
    }

    const payload: JwTPayload = {
      sub: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

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
    };
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verify(refreshToken, {
        secret: envs.jwtRefreshSecret,
      });

      // Busca al usuario y verifica que el token coincida
      const user = await this.usersService.findOne(payload.id);

      if (!user || !(await bcrypt.compare(refreshToken, user.refreshToken))) {
        throw new UnauthorizedException(
          'Invalid refresh token or user not found',
        );
      }

      return await this.generateAccessToken({
        sub: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token', error.message);
    } finally {
    }
  }

  async logout(userId: number) {
    await this.user.update({
      where: { id: userId },
      data: { refreshToken: '' },
    });
  }
}
