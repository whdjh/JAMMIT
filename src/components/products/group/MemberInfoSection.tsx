'use client';
import Button from '@/components/commons/Button';
import MemberList from './MemberList';
import { useState } from 'react';

interface Member {
  id: string;
  nickname: string;
  sessions: string[];
  introduction: string;
  profileImage?: File | null;
}

// TODO: 신청 멤버 데이터 받아오는 API 연결
const members1: Member[] = [
  {
    id: 'm1',
    nickname: '내가왔다',
    sessions: ['일렉기타'],
    introduction:
      '안녕하세요, 기타치고 노래하는 내가 왔다입니다~! 저는 빠르고 경쾌한 곡에 잘 어울리는 목소리이고 프로페셔널한 마인드입니다. ',
  },
  {
    id: 'm2',
    nickname: '리버스캥거루',
    sessions: ['건반'],
    introduction: '피아노 치는 캥거루입니다!',
  },
];

const members2: Member[] = [
  {
    id: 'm1',
    nickname: '내가왔다',
    sessions: ['일렉기타'],
    introduction:
      '안녕하세요, 기타치고 노래하는 내가 왔다입니다~! 저는 빠르고 경쾌한 곡에 잘 어울리는 목소리이고 프로페셔널한 마인드입니다. ',
  },
  {
    id: 'm2',
    nickname: '리버스캥거루',
    sessions: ['건반'],
    introduction: '피아노 치는 캥거루입니다!',
  },
  {
    id: 'm3',
    nickname: '코드장인',
    sessions: ['드럼'],
    introduction: '리듬은 제 전문입니다.',
  },
  {
    id: 'm4',
    nickname: '하모닉고수',
    sessions: ['베이스'],
    introduction: '화음을 받치는 베이스맨입니다.',
  },
];

export default function MemberInfoSection() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // TODO: 수락, 거절 API 연결
  const handleAccept = () => {
    console.log('수락한 멤버 ID:', selectedIds);
  };

  const handleReject = () => {
    console.log('거절한 멤버 ID:', selectedIds);
  };

  return (
    <>
      <section className="flex w-[60rem] flex-col gap-[40px] rounded-[0.5rem] bg-[#202024] p-[2.5rem]">
        <MemberList title="확정 멤버" members={members1} isSelectable={false} />
        <MemberList
          title="신청 멤버"
          members={members2}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          isSelectable={true}
        />
      </section>

      <div className="flex flex-col gap-[1.25rem]">
        <Button
          variant="solid"
          className="w-[22.75rem]"
          onClick={handleAccept}
          disabled={selectedIds.length === 0}
        >
          {selectedIds.length}명 수락
        </Button>
        <Button
          variant="outline"
          className="w-[22.75rem]"
          onClick={handleReject}
          disabled={selectedIds.length === 0}
        >
          {selectedIds.length}명 거절
        </Button>
      </div>
    </>
  );
}
