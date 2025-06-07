'use client';

import DefaultProfileImage from '@/assets/icons/ic_default_profile.svg';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface ProfileImageProps {
  src?: string | null;
  alt?: string;
  size?: number; // 단위: rem
  className?: string;
}

export default function ProfileImage({
  src,
  alt = '프로필 이미지',
  size = 2.5,
  className,
}: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);
  const commonStyle = clsx('rounded-full object-cover', className);
  const pxSize = size * 16;

  if (!src || hasError) {
    return (
      <DefaultProfileImage
        width={pxSize}
        height={pxSize}
        className={commonStyle}
      />
    );
  }

  return (
    <div
      style={{ width: `${size}rem`, height: `${size}rem` }}
      className={clsx('relative overflow-hidden rounded-full', className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}rem`}
        className={commonStyle}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
