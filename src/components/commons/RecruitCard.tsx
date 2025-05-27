'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Like from '../commons/Like';
import { getDate } from '@/utils/date';
import { RecruitCardData } from '@/types/card';

interface RecruitCardProps {
  data: RecruitCardData;
}

export default function RecruitCard({ data }: RecruitCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState<string[]>([]);
  const [hiddenTags, setHiddenTags] = useState<string[]>([]);
  useLayoutEffect(() => {
    if (!wrapperRef.current || !data.tags.length) {
      return;
    }
    const tagEls = Array.from(wrapperRef.current!.children) as HTMLElement[];
    const containerWidth = wrapperRef.current!.offsetWidth;
    let total = 0;
    const visible: string[] = [];
    const hidden: string[] = [];

    for (let i = 0; i < data.tags.length; i++) {
      const el = tagEls[i];
      if (!el) {
        break;
      }
      total += el.offsetWidth + 8;
      if (total < containerWidth - 40) {
        visible.push(data.tags[i]);
      } else {
        hidden.push(data.tags[i]);
      }
    }

    setVisibleTags(visible);
    setHiddenTags(hidden);
  }, [data.tags]);
  return (
    <Link href={`de/${data.id}`}>
      <div className="relative h-[12.43rem] overflow-hidden rounded-lg">
        <Like initialLiked={data.liked} />
        <Image
          src={data.thumbnailUrl}
          alt={data.title}
          width={320}
          height={199}
        />
      </div>

      <div
        className="mt-[1.12rem] flex flex-wrap gap-[0.37rem]"
        ref={wrapperRef}
      >
        {(visibleTags.length ? visibleTags : data.tags).map((tag) => (
          <span
            key={tag}
            className="rounded-lg bg-[color:var(--bg-34343A)] px-3 py-1.5 text-sm font-medium"
          >
            {tag}
          </span>
        ))}
        {visibleTags.length > 0 && hiddenTags.length > 0 && (
          <span className="rounded-lg bg-[color:var(--bg-34343A)] px-3 py-1.5 text-sm font-medium">
            ...
          </span>
        )}
      </div>

      <div className="mt-5 truncate text-lg font-semibold">{data.title}</div>
      <div className="mt-5 text-[color:var(--gray-50)]">{data.author}</div>

      <div className="mt-5 flex items-center justify-between border-t border-t-[#393940] pt-[1.37rem]">
        <span>{getDate(data.dday)}</span>
        <div className="group relative">
          <span className="text-[color:var(--primary)]">
            {data.current}/{data.total}
          </span>{' '}
          명 모집중
          <ul className="absolute right-[-2px] bottom-[39px] hidden rounded-xl bg-[#29292C] group-hover:block">
            {data.member.map((item) => (
              <li
                key={item.name}
                className="flex w-[142px] items-center border-b border-b-[#3B3B40] px-4 py-2.5 last:border-none"
              >
                <p className="w-1/2">{item.name}</p>
                <span className="w-1/2">
                  {item.Personnel}/{item.total}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
