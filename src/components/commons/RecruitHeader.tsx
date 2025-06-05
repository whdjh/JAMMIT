import MultiSelectDropdown from '@/components/commons/MultiSelectDropdown';
import { GENRE_OPTIONS, SESSION_OPTIONS } from '@/constants/checkbox';
import { BandSession, Genre } from '@/types/tags';
import React, { Fragment } from 'react';

interface FilterHeaderProps {
  genres: Genre[];
  setGenres: React.Dispatch<React.SetStateAction<Genre[]>>;
  sessions: BandSession[];
  setSessions: React.Dispatch<React.SetStateAction<BandSession[]>>;
}

export default function RecruitHeader({
  genres,
  setGenres,
  sessions,
  setSessions,
}: FilterHeaderProps) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
