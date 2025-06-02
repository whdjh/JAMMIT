import React from 'react';
import MinusIcon from '@/assets/icons/ic_minus.svg';
import PlusIcon from '@/assets/icons/ic_plus.svg';

interface NumberInputProps {
  count: number;
  onChange: (newCount: number) => void;
  min?: number;
}

export default function NumberInput({
  count,
  onChange,
  min = 1,
}: NumberInputProps) {
  const decrease = () => onChange(Math.max(count - 1, min));
  const increase = () => onChange(count + 1);

  return (
    <div className="flex h-[2.75rem] w-[6.6875rem] items-center gap-[1.125rem] rounded-lg bg-[#34343A] px-[1rem] py-[0.75rem]">
      <button onClick={decrease} type="button" aria-label="감소">
        <MinusIcon />
      </button>
      <span className="w-auto text-center text-sm text-white">{count}</span>
      <button onClick={increase} type="button" aria-label="증가">
        <PlusIcon />
      </button>
    </div>
  );
}
