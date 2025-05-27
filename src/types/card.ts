import { StaticImageData } from 'next/image';

export interface RecruitCardData {
  id: string;
  title: string;
  author: string;
  tags: string[];
  thumbnailUrl: StaticImageData;
  dday: string;
  current: number;
  total: number;
  liked: boolean;
  member: { name: string; Personnel: number; total: number }[];
}
