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

export default function TagSelectorTestPage() {
  const handleSessionChange1 = (selected: string[]) => {
    console.log('선호 장르:', selected);
  };
  const handleSessionChange2 = (selected: string[]) => {
    console.log('선호 장르:', selected);
  };
  return (
    <div className="flex h-full w-full flex-col gap-10 bg-[#242429] p-10">
      <div className="w-100">
        <h1 className="mb-5 text-white">Selectable, 초기값 X</h1>
        <TagSelector
          mode="selectable"
          tags={SESSION_TAGS}
          onChange={handleSessionChange1}
        />
      </div>
      <div className="w-100">
        <h1 className="mb-5 text-white">Selectable, 초기값 O</h1>
        <TagSelector
          mode="selectable"
          tags={SESSION_TAGS}
          initialSelected={['보컬', '드럼']}
          onChange={handleSessionChange2}
        />
      </div>
      <div className="w-100">
        <h1 className="mb-5 text-white">ReadOnly, 초기값 X</h1>
        <TagSelector mode="readonly" tags={SESSION_TAGS} />
      </div>
      <div className="w-100">
        <h1 className="mb-5 text-white">ReadOnly, 초기값 O</h1>
        <TagSelector
          mode="readonly"
          tags={SESSION_TAGS}
          initialSelected={['보컬', '드럼']}
        />
      </div>
    </div>
  );
}
