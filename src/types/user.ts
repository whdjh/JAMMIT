import { BandSession, Genre } from './tags';

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  nickname: string;
  profileImagePath: string;
  createdAt: string;
  updatedAt: string;
  preferredGenres: Genre[];
  preferredBandSessions: BandSession[];
}
