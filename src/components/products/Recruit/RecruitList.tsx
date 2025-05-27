'use client';
import React, { useState } from 'react';
import RecruitCard from '../../commons/RecruitCard';
import Dropdown from '../../commons/Dropdown';
import ArrowDown from '@/assets/icons/ic_arrowdown.svg';
import { ImCard01, ImCard02, ImCard03, ImCard04 } from '@/assets/images';
import { RecruitCardData } from '@/types/card';

export default function RecruitList() {
  const mockRecruits = [
    {
      id: '1',
      title: '그린데이 좋아하시는 분 계세요?',
      author: '잼잼러',
      tags: ['얼터너티브', '락', '포크', '어쿠스틱', '하드락', '모던락'],
      thumbnailUrl: ImCard01,
      dday: '2024-06-01T23:59:59.000Z',
      current: 3,
      total: 5,
      liked: false,
      member: [
        { name: '드럼', Personnel: 1, total: 1 },
        { name: '보컬', Personnel: 1, total: 1 },
        { name: '기타', Personnel: 1, total: 2 },
      ],
    },
    {
      id: '2',
      title: '재즈 밴드 드러머 구해요!',
      author: '몽글몽글',
      tags: ['재즈', '드럼'],
      thumbnailUrl: ImCard02,
      dday: '2024-06-01T23:59:59.000Z',
      current: 2,
      total: 4,
      liked: true,
      member: [
        { name: '드럼', Personnel: 1, total: 1 },
        { name: '보컬', Personnel: 1, total: 1 },
        { name: '기타', Personnel: 1, total: 2 },
      ],
    },
    {
      id: '3',
      title: '여성 보컬 모집합니다 🎤',
      author: '하이텐션',
      tags: ['팝', '보컬'],
      thumbnailUrl: ImCard03,
      dday: '2024-06-01T23:59:59.000Z',
      current: 1,
      total: 3,
      liked: false,
      member: [
        { name: '드럼', Personnel: 1, total: 1 },
        { name: '보컬', Personnel: 1, total: 1 },
        { name: '기타', Personnel: 1, total: 2 },
      ],
    },
    {
      id: '4',
      title: '홍대에서 매주 합주하실 분!',
      author: '루프탑',
      tags: ['인디', '홍대'],
      thumbnailUrl: ImCard04,
      dday: '2024-06-01T23:59:59.000Z',
      current: 4,
      total: 5,
      liked: true,
      member: [
        { name: '드럼', Personnel: 1, total: 1 },
        { name: '보컬', Personnel: 1, total: 1 },
        { name: '기타', Personnel: 1, total: 2 },
      ],
    },
  ];
  const Genre = [
    '장르',
    '락',
    '메탈',
    '팝',
    '발라드',
    'R&B',
    '인디',
    '얼터너터브',
    '재즈',
    '펑크',
    '어쿠스틱',
    '포크',
  ];
  const Session = [
    '세션',
    '일렉기타',
    '드럼',
    '보컬',
    '일랙기타',
    '통기타',
    '건반',
    '현악기',
    '그외',
  ];
  const [genre, setGenre] = useState(Genre[0]);
  const [session, setSession] = useState(Session[0]);
  console.log(genre);
  console.log(session);
  return (
    <div className="pc:max-w-[62.5rem] mx-auto mt-8">
      <div className="relative mb-[65px] h-[240px] overflow-hidden rounded-lg bg-[#2B2B30]">
        <div className="absolute top-[77px] left-[62px]">
          <span className="text-sm">함께 연주할 사함이 없나요?</span>
          <p className="mt-2 text-2xl font-semibold text-[#D5E9FF]">
            지금 모임에 참여해보세요
          </p>
        </div>
      </div>
      <div className="mt-[65px] mb-[29px] flex gap-2">
        <Dropdown
          onSelect={setGenre}
          menuOptions={Genre}
          prefixIcon={<ArrowDown />}
        />
        <Dropdown
          onSelect={setSession}
          menuOptions={Session}
          prefixIcon={<ArrowDown />}
        />
      </div>
      <div className="pc:grid-cols-3 grid grid-cols-1 gap-[20px]">
        {mockRecruits.map((item: RecruitCardData) => (
          <RecruitCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
