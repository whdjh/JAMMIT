import { StaticImageData } from 'next/image';

export interface RecruitCardData {
  id: string;
  name: string;
  thumbnail: StaticImageData;

  genres: string[];
  author: string;
  liked: boolean;
  totalRecruit: number;
  totalCurrent: number;
  recruitDeadline: string;
  member: { name: string; personnel: number; total: number }[];
}
