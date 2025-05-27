'use client';
import { useCallback, useMemo, useState } from 'react';
import CheckIcon from '@/assets/icons/ic_check.svg';
import PlusIcon from '@/assets/icons/ic_plus.svg';
import { clsx } from 'clsx';

interface TagSelectorProps {
  tags: string[];
  mode: 'selectable' | 'readonly';
  initialSelected?: string[];
  onChange?: (selected: string[]) => void;
}

export default function TagSelector({
  tags,
  mode = 'selectable',
  initialSelected = [],
  onChange,
}: TagSelectorProps) {
  const [selected, setSelected] = useState<string[]>(
    mode === 'selectable' ? initialSelected : [],
  );
  const selectedSet = useMemo(() => {
    return new Set(mode === 'readonly' ? initialSelected : selected);
  }, [mode, initialSelected, selected]);

  const toggleTag = useCallback(
    (tag: string) => {
      if (mode === 'readonly') return;
      setSelected((prev) => {
        const newSelected = prev.includes(tag)
          ? prev.filter((t) => t !== tag)
          : [...prev, tag];

        onChange?.(newSelected);
        return newSelected;
      });
    },
    [mode, onChange],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-[0.5rem]">
        {tags.map((tag, index) => {
          const isActive = selectedSet.has(tag);
          const baseClass =
            'box-border flex h-[2rem] items-center justify-center rounded-[0.5rem] border bg-[#34343a] pr-[0.5rem] pl-[0.75rem] text-sm font-medium text-gray-100';
          const activeClass = isActive
            ? 'border-[#9747FF] shadow-md'
            : 'border-transparent';
          const pointerClass = mode === 'selectable' ? 'cursor-pointer' : '';
          return (
            <button
              type="button"
              key={`${tag}-${index}`}
              onClick={() => toggleTag(tag)}
              className={clsx(baseClass, activeClass, pointerClass)}
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
