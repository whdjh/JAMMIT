import React from 'react';
import RecruitCard from './RecruitCard';
import { RecruitCardData } from '@/types/types';

export default function RecruitList() {
  const mockRecruits = [
    {
      id: '1',
      title: '그린데이 좋아하시는 분 계세요?',
      author: '잼잼러',
      tags: ['얼터너티브', '락'],
      thumbnailUrl: 'https://picsum.photos/320/199?random=4',
      dday: '2024-06-01T23:59:59.000Z',
      current: 3,
      total: 5,
      liked: false,
    },
    {
      id: '2',
      title: '재즈 밴드 드러머 구해요!',
      author: '몽글몽글',
      tags: ['재즈', '드럼'],
      thumbnailUrl: 'https://picsum.photos/320/199?random=1',
      dday: '2024-06-01T23:59:59.000Z',
      current: 2,
      total: 4,
      liked: true,
    },
    {
      id: '3',
      title: '여성 보컬 모집합니다 🎤',
      author: '하이텐션',
      tags: ['팝', '보컬'],
      thumbnailUrl: 'https://picsum.photos/320/199?random=5',
      dday: '2024-06-01T23:59:59.000Z',
      current: 1,
      total: 3,
      liked: false,
    },
    {
      id: '4',
      title: '홍대에서 매주 합주하실 분!',
      author: '루프탑',
      tags: ['인디', '홍대'],
      thumbnailUrl: 'https://picsum.photos/320/199?random=2',
      dday: '2024-06-01T23:59:59.000Z',
      current: 4,
      total: 5,
      liked: true,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-[1.0625rem] lg:grid-cols-3">
      {mockRecruits.map((item: RecruitCardData) => (
        <RecruitCard key={item.id} data={item} />
      ))}
    </div>
  );
}
