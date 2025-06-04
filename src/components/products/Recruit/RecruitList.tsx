'use client';
import React, { useState } from 'react';
import { ImgCard01, ImgCard02, ImgCard03, ImgCard04 } from '@/assets/images';
import { RecruitCardData } from '@/types/card';
import Link from 'next/link';
import { Card } from '@/components/commons/Card';
import { CARD_STATE } from '@/constants/card';
import { BandSession, Genre } from '@/types/tags';
import MultiSelectDropdown from '@/components/commons/MultiSelectDropdown';

export default function RecruitList() {
  const mockRecruits = [
    {
      id: '1',
      name: '그린데이 좋아하시는 분 계세요?',
      author: '잼잼러',
      genres: ['얼터너티브', '락', '포크', '어쿠스틱', '하드락', '모던락'],
      thumbnail: ImgCard01,
      totalRecruit: 5,
      totalCurrent: 3,
      recruitDeadline: '2024-06-01T23:59:59.000Z',
      liked: false,
      member: [
        { name: '드럼', personnel: 1, total: 1 },
        { name: '보컬', personnel: 1, total: 1 },
        { name: '기타', personnel: 1, total: 2 },
      ],
    },
    {
      id: '2',
      name: '재즈 밴드 드러머 구해요!',
      author: '몽글몽글',
      genres: ['재즈', '드럼'],
      thumbnail: ImgCard02,
      totalRecruit: 4,
      totalCurrent: 2,
      recruitDeadline: '2024-06-01T23:59:59.000Z',
      liked: true,
      member: [
        { name: '드럼', personnel: 1, total: 1 },
        { name: '보컬', personnel: 1, total: 1 },
        { name: '기타', personnel: 1, total: 2 },
      ],
    },
    {
      id: '3',
      name: '여성 보컬 모집합니다 🎤',
      author: '하이텐션',
      genres: ['팝', '보컬'],
      thumbnail: ImgCard03,
      totalRecruit: 3,
      totalCurrent: 1,
      recruitDeadline: '2024-06-01T23:59:59.000Z',
      liked: false,
      member: [
        { name: '드럼', personnel: 1, total: 1 },
        { name: '보컬', personnel: 1, total: 1 },
        { name: '기타', personnel: 1, total: 2 },
      ],
    },
    {
      id: '4',
      name: '홍대에서 매주 합주하실 분!',
      author: '루프탑',
      genres: ['인디', '홍대'],
      thumbnail: ImgCard04,
      totalRecruit: 5,
      totalCurrent: 4,
      recruitDeadline: '2024-06-01T23:59:59.000Z',
      liked: true,
      member: [
        { name: '드럼', personnel: 1, total: 1 },
        { name: '보컬', personnel: 1, total: 1 },
        { name: '기타', personnel: 1, total: 2 },
      ],
    },
  ];
  // 장르, 세션
  const [genres, setGenres] = useState<Genre[]>([]);
  const [sesstion, setSesstion] = useState<BandSession[]>([]);
  const GENRE_OPTIONS = [
    { label: '락', value: Genre.ROCK },
    { label: '메탈', value: Genre.METAL },
    { label: '팝', value: Genre.POP },
    { label: '발라드', value: Genre.BALLAD },
    { label: 'R&B', value: Genre.RNB },
    { label: '인디', value: Genre.INDIE },
    { label: '얼터너티브', value: Genre.ALTERNATIVE },
    { label: '재즈', value: Genre.JAZZ },
    { label: '펑크', value: Genre.PUNK },
    { label: '어쿠스틱', value: Genre.ACOUSTIC },
    { label: '포크', value: Genre.FOLK },
  ];
  const SESSION_OPTIONS = [
    { label: '보컬', value: BandSession.VOCAL },
    { label: '일렉기타', value: BandSession.ELECTRIC_GUITAR },
    { label: '통기타', value: BandSession.ACOUSTIC_GUITAR },
    { label: '베이스', value: BandSession.BASS },
    { label: '드럼', value: BandSession.DRUM },
    { label: '타악기', value: BandSession.PERCUSSION },
    { label: '현악기', value: BandSession.STRING_INSTRUMENT },
  ];
  return (
    <div className="pc:max-w-[84rem] mx-auto mt-8">
      <div className="relative mb-[65px] h-[15rem] overflow-hidden rounded-lg bg-[#2B2B30]">
        <div className="absolute top-[5.5rem] left-[14.875rem]">
          <span className="text-sm">함께하면 더 재밌으니까, 재밋! 🤟‍️️</span>
          <p className="mt-2 text-2xl font-semibold text-[var(--purple-500)]">
            지금 모임에 참여해보세요
          </p>
        </div>
      </div>
      <div className="mt-[65px] mb-[29px]">
        <div className="flex gap-2">
          <MultiSelectDropdown
            label="장르"
            options={GENRE_OPTIONS}
            selected={genres}
            onChange={setGenres}
          />
          <MultiSelectDropdown
            label="세션"
            options={SESSION_OPTIONS}
            selected={sesstion}
            onChange={setSesstion}
          />
        </div>
      </div>
      <div className="pc:grid-cols-4 grid grid-cols-1 gap-x-5 gap-y-10">
        {mockRecruits.map((item: RecruitCardData) => (
          <Link key={item.id} href={`de/${item.id}`}>
            <Card.Thumbnail
              thumbnail={item.thumbnail}
              liked={item.liked}
              alt={item.name}
            />
            <Card.TagList tags={item.genres} />
            <Card.TitleBlock title={item.name} author={item.author} />
            <Card.Footer
              status={CARD_STATE.COMPLETED}
              totalCurrent={item.totalCurrent}
              totalRecruit={item.totalRecruit}
              recruitDeadline={item.recruitDeadline}
              member={item.member}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
