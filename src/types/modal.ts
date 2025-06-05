import { BandSession, Genre } from './tags';

export interface EditFormData {
  email: string;
  username: string;
  password: string | null;
  image?: File;
  preferredGenres: Genre[];
  preferredBandSessions: BandSession[];
}

export interface ReviewFormData {
  rating: number;
  tags: string[];
  review: string;
}
