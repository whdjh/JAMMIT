'use client';
import { useCallback, useMemo, useState } from 'react';
import CheckIcon from '@/assets/icons/ic_check.svg';
import PlusIcon from '@/assets/icons/ic_plus.svg';
import { clsx } from 'clsx';

interface TagSelectorProps {
  tags: string[];
  onChange?: (selected: string[]) => void;
}

export default function TagSelector({ tags, onChange }: TagSelectorProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const toggleTag = useCallback(
    (tag: string) => {
      setSelected((prev) => {
        const exists = prev.includes(tag);
        const updated = exists ? prev.filter((t) => t !== tag) : [...prev, tag];
        onChange?.(updated);
        return updated;
      });
    },
    [onChange],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-[0.5rem]">
        {tags.map((tag, index) => {
          const isActive = selectedSet.has(tag);
          return (
            <button
              key={`${tag}-${index}`}
              onClick={() => toggleTag(tag)}
              className={clsx(
                'box-border flex h-[2rem] items-center justify-center rounded-[0.5rem] border bg-[#34343a] pr-[0.5rem] pl-[0.75rem] text-sm font-medium text-gray-100',
                isActive ? 'border-[#9747FF] shadow-md' : 'border-transparent',
              )}
            >
              {tag}
              {isActive ? <CheckIcon /> : <PlusIcon />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
