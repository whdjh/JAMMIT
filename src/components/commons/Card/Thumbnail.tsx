import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Like from '@/components/commons/Like';

interface ThumbnailProps {
  thumbnail: StaticImageData;
  liked: boolean;
  alt: string;
  isLike?: boolean;
}

export default function Thumbnail({
  thumbnail,
  liked,
  alt,
  isLike = true,
}: ThumbnailProps) {
  return (
    <div className="relative h-[12.5rem] overflow-hidden rounded-lg">
      {isLike && <Like initialLiked={liked} />}
      <Image src={thumbnail} alt={alt} width={320} height={200} />
    </div>
  );
}
