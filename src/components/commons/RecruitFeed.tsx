import React from 'react';
import Link from 'next/link';
import { Card } from './Card';
import MultiSelectDropdown from './MultiSelectDropdown';
import InfinityScroll from './InfinityScroll';
import { GENRE_OPTIONS, SESSION_OPTIONS } from '@/constants/checkbox';
import { CARD_STATE } from '@/constants/card';
import { RecruitCardData } from '@/types/card';
import { BandSession, Genre } from '@/types/tags';

interface ViewProps {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  sessions: BandSession[];
  setSessions: React.Dispatch<React.SetStateAction<BandSession[]>>;
  data: RecruitCardData[];
  hasMore: boolean;
  onInView: () => void;
}
export default function RecruitListView({
  genres,
  setGenres,
  sessions,
  setSessions,
  hasMore,
  onInView,
  data,
}: ViewProps) {
  return (
    <div className="pc:max-w-[84rem] mx-auto mt-8 pb-[5rem]">
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
            selected={sessions}
            onChange={setSessions}
          />
        </div>
      </div>
      <InfinityScroll
        list={data}
        item={(item) => (
          <Link key={item.id} href={`de/${item.id}`}>
            <Card.Thumbnail
              thumbnail={item.thumbnail}
              liked={item.liked}
              alt={item.name}
            />
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
        )}
        emptyText="아직 찜한 모임이 없어요"
        onInView={onInView}
        hasMore={hasMore}
      />
    </div>
  );
}
