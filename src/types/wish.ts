import { RecruitCardData } from './card';
import { BandSession, Genre } from './tags';

export interface WishProps {
  defaultGenres: Genre[];
  defaultSessions: BandSession[];
}

export interface Page {
  currentPage: number;
  totalPage: number;
}

export interface WishResponse {
  gatherings: RecruitCardData[];
  currentPage: number;
  totalPage: number;
  totalElements: number;
}
export type WishQueryKey = readonly [
  'wish',
  {
    genres: string[];
    sessions: string[];
    includeCanceled: boolean;
  },
];

export function makeWishQueryKey(params: {
  genres: string[];
  sessions: string[];
  includeCanceled: boolean;
}): WishQueryKey {
  return ['wish', params] as const;
}
