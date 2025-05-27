'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IconLove from '@/assets/icons/ic_love.svg';

interface LikeProps {
  initialLiked: boolean;
}

export default function Like({ initialLiked = false }: LikeProps) {
  const [liked, setLiked] = useState(initialLiked);
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLiked((prev) => !prev);
  };
  return (
    <motion.button
      className="absolute top-2 right-2"
      aria-label="좋아요"
      animate={{ scale: liked ? 1 : 1 }}
      whileTap={{ scale: 1.3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleLike(e)}
    >
      <IconLove
        className={`h-6 w-6 ${liked ? 'text-[color:var(--primary)]' : 'text-white'}`}
      />
    </motion.button>
  );
}
