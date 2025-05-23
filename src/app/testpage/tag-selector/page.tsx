'use client';
import TagSelector from '@/components/commons/TagSelector';

const SESSION_TAGS = [
  '보컬',
  '일렉 기타',
  '드럼',
  '통기타',
  '베이스',
  '현악기',
  '타악기',
];

const GENRE_TAGS = [
  '락/메탈',
  '팝',
  '발라드',
  '인디',
  '얼터너티브',
  '재즈',
  '펑크',
  '어쿠스틱',
  '포크',
  'R&B',
];

const FEEDBACK_TAGS = [
  '연주 실력이 좋아요',
  '곡 준비를 잘 해왔어요',
  '다른 파트와의 호흡이 잘 맞아요',
  '악보나 연습 자료를 잘 공유해줬어요',
  '분위기를 잘 이끌어요',
];

export default function TagSelectorTestPage() {
  const handleSessionChange = (selected: string[]) => {
    console.log('선호 장르:', selected);
  };
  const handleGenreChange = (selected: string[]) => {
    console.log('선호 장르:', selected);
  };
  return (
    <div className="flex h-full w-full flex-col gap-10 bg-[#242429] p-10">
      <div className="w-100">
        <TagSelector tags={SESSION_TAGS} onChange={handleSessionChange} />
      </div>
      <div className="w-70">
        <TagSelector tags={GENRE_TAGS} onChange={handleGenreChange} />
      </div>
      <div className="w-130">
        <TagSelector tags={FEEDBACK_TAGS} />
      </div>
    </div>
  );
}
