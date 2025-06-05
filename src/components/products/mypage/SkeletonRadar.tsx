import ShimmerSkeleton from '@/components/commons/ShimmerSkeleton';
import React from 'react';

export default function SkeletonRadar() {
  return (
    <div className="w-[23rem] animate-pulse rounded-lg bg-[#28282a] px-[2.375rem] pt-[3.75rem] pb-[2.375rem]">
      <ShimmerSkeleton className="mx-auto h-[18.5rem] w-[18.5rem] rounded-full bg-[#3a3a3a]" />
      <ul className="mt-[53px] flex w-full flex-col gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ShimmerSkeleton
            key={i}
            className="h-10 w-full rounded-lg bg-[#3a3a3a]"
          />
        ))}
      </ul>
    </div>
  );
}
