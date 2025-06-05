'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/commons/Card';
import MultiSelectDropdown from '@/components/commons/MultiSelectDropdown';
import {
  GENRE_OPTIONS,
  mockRecruits,
  SESSION_OPTIONS,
} from '@/constants/checkbox';
import { CARD_STATE } from '@/constants/card';
import { BandSession, Genre } from '@/types/tags';
import { RecruitCardData } from '@/types/card';

export default function RecruitList() {
  // 장르, 세션
  const [genres, setGenres] = useState<Genre[]>([]);
  const [sesstion, setSesstion] = useState<BandSession[]>([]);

  return (
    <div className="pc:max-w-[84rem] mx-auto mt-8 max-w-full">
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
      <div className="pc:grid-cols-4 grid grid-cols-2 gap-x-5 gap-y-10">
        {mockRecruits.map((item: RecruitCardData) => (
          <Link key={item.id} href={`de/${item.id}`}>
            <Card.Thumbnail thumbnail={item.thumbnail} alt={item.name} />
            <Card.TagList tags={item.genres} />
            <Card.TitleBlock title={item.name} author={item.author} />
            <Card.Footer
              status={CARD_STATE.PROGRESS}
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
