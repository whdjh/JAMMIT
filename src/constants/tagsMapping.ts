import { Genre, BandSession } from '@/types/tags';

export const GENRE_KR_TO_ENUM: Record<string, Genre> = {
  락: Genre.ROCK_METAL,
  메탈: Genre.ROCK_METAL, // 락, 메탈 일단 동일하게 설정
  팝: Genre.POP,
  발라드: Genre.BALLAD,
  'R&B': Genre.RNB,
  인디: Genre.INDIE,
  얼터너티브: Genre.ALTERNATIVE,
  재즈: Genre.JAZZ,
  펑크: Genre.PUNK,
  어쿠스틱: Genre.ACOUSTIC,
  포크: Genre.FOLK,
};

export const SESSION_KR_TO_ENUM: Record<string, BandSession> = {
  보컬: BandSession.VOCAL,
  일렉기타: BandSession.ELECTRIC_GUITAR,
  통기타: BandSession.ACOUSTIC_GUITAR,
  베이스: BandSession.BASS,
  // '건반': BandSession.KEYBOARD, <- 추가 필요
  드럼: BandSession.DRUM,
  타악기: BandSession.PERCUSSION,
  현악기: BandSession.STRING_INSTRUMENT,
};
