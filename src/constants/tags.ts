export const GENRE_TAGS = [
  '락',
  '메탈',
  '팝',
  '발라드',
  'R&B',
  '인디',
  '얼터너티브',
  '재즈',
  '펑크',
  '어쿠스틱',
  '포크',
];

export const SESSION_TAGS = [
  '보컬',
  '일렉기타',
  '통기타',
  '베이스',
  '건반',
  '드럼',
  '타악기',
  '현악기',
];

export const SESSION_KEY_MAP: { [korean: string]: keyof InstrumentCount } = {
  보컬: 'vocal',
  일렉기타: 'electricGuitar',
  통기타: 'acousticGuitar',
  베이스: 'bass',
  건반: 'keyboard',
  드럼: 'drum',
  타악기: 'percussion',
  현악기: 'string',
};

export interface InstrumentCount {
  electricGuitar: number;
  acousticGuitar: number;
  bass: number;
  drum: number;
  vocal: number;
  keyboard: number;
  percussion: number;
  string: number;
}
