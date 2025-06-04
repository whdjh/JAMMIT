'use client';
import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import RecruitFeed from '@/components/commons/RecruitFeed';
import { getLiked } from '@/lib/wish/wish';
import { BandSession, Genre } from '@/types/tags';
import { makeWishQueryKey, WishProps } from '@/types/wish';

export default function WishPage({
  defaultGenres,
  defaultSessions,
}: WishProps) {
  // 장르, 세션
  const [genres, setGenres] = useState<Genre[]>(defaultGenres);
  const [sessions, setSessions] = useState<BandSession[]>(defaultSessions);
  const queryKey = makeWishQueryKey({
    genres,
    sessions,
    includeCanceled: false,
  });
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey,
    queryFn: ({ queryKey, pageParam = 0 }) => getLiked({ queryKey, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.currentPage + 1 < lastPage.totalPage
        ? lastPage.currentPage + 1
        : undefined;
    },
  });

  const flatData = data?.pages.flatMap((page) => page.gatherings) ?? [];
  return (
    <RecruitFeed
      genres={genres}
      setGenres={setGenres}
      sessions={sessions}
      setSessions={setSessions}
      data={flatData}
      hasMore={!!hasNextPage && !isFetching}
      onInView={() => {
        if (hasNextPage && !isFetching) {
          fetchNextPage();
        }
      }}
    />
  );
}
