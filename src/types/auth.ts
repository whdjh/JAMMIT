import { UserResponse } from '@/types/user';
import { BandSession, Genre } from './tags';

export interface SignupRequest {
  email: string;
  username: string;
  password: string;
  nickname: string;
  preferredGenres: Genre[];
  preferredBandSessions: BandSession[];
}

export interface SignupResponse {
  success: boolean;
  code: number;
  message: string;
  result: UserResponse;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserResponse;
}
