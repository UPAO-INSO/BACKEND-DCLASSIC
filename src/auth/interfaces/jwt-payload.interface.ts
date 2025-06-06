import { IsNumber } from 'class-validator';

export interface JwTPayload {
  sub: number; // id del usuario
  email: string;
  username: string;
  role: string;
}
