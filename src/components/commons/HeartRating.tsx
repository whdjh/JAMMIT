import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import FilledHeart from '@/assets/icons/ic_fillheart.svg';
import EmptyHeart from '@/assets/icons/ic_emptyheart.svg';

interface HeartRatingProps {
  /** 전체 하트수 개수 */
  totalValue: number;
  /** 하트 개수 */
  value?: number;
  /** 동적 렌더링을 위한 콜백 함수 */
  onChange?: (value: number) => void;
}

const SCALE_MAP: Record<number, number> = { 1: 0.92, 2: 1.08, 3: 1 };

export default function HeartRating({
  totalValue,
  value = 0,
  onChange,
}: HeartRatingProps) {
  const [animStage, setAnimStage] = useState<null | number>(null);
  const [animIndex, setAnimIndex] = useState<null | number>(null);

  const handleClick = useCallback(
    (index: number) => {
      if (!onChange) {
        return;
      }

      onChange(index + 1);
      setAnimIndex(index);
      setAnimStage(1);
    },
    [onChange],
  );

  const handleAnimComplete = useCallback(() => {
    if (animStage === 1) {
      setAnimStage(2);
    } else if (animStage === 2) {
      setAnimStage(3);
    } else if (animStage === 3) {
      setAnimStage(null);
      setAnimIndex(null);
    }
  }, [animStage]);

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalValue }).map((_, i) => {
        const HeartIcon = i < value ? FilledHeart : EmptyHeart;
        const isAnimating = animIndex === i && animStage !== null;

        return (
          <button
            key={i}
            type="button"
            onClick={() => handleClick(i)}
            className="cursor-pointer border-none bg-none p-0"
            aria-label={`${i + 1}점`}
          >
            <motion.div
              style={{ width: 24, height: 24, display: 'flex' }}
              animate={{ scale: isAnimating ? SCALE_MAP[animStage] : 1 }}
              transition={{ duration: 0.15 }}
              onAnimationComplete={handleAnimComplete}
            >
              <HeartIcon />
            </motion.div>
          </button>
        );
      })}
    </div>
  );
}
