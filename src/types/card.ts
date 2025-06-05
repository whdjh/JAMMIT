import { StaticImageData } from 'next/image';

export interface RecruitCardData {
  id: number;
  name: string;
  thumbnail: StaticImageData;

  genres: string[];
  author: string;
  totalRecruit: number;
  totalCurrent: number;
  recruitDeadline: string;
  member: { name: string; personnel: number; total: number }[];
}
