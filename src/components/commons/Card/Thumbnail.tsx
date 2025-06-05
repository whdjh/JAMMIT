import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Like from '@/components/commons/Like';
import { FavoriteItem } from '@/types/wish';

interface ThumbnailProps {
  thumbnail: StaticImageData;
  alt: string;
  isLike?: boolean;
  favoriteItem?: FavoriteItem;
}

export default function Thumbnail({
  thumbnail,
  alt,
  isLike = true,
  favoriteItem,
}: ThumbnailProps) {
  return (
    <div className="relative h-[12.5rem] overflow-hidden rounded-lg">
      {isLike && favoriteItem && <Like item={favoriteItem} />}
      <Image src={thumbnail} alt={alt} width={320} height={200} />
    </div>
  );
}
