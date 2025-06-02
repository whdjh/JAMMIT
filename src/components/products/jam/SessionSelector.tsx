import { useState } from 'react';
import Dropdown from '@/components/commons/Dropdown';
import NumberInput from './NumberInput';
import { SESSION_TAGS, SESSION_KEY_MAP } from '@/constants/tags';
import ArrowDown from '@/assets/icons/ic_arrowdown.svg';

interface SessionSelectorProps {
  session: Record<string, number>;
  sortOption: string;
  setSortOption: (val: string) => void;
  onChange: (value: number) => void;
}

export default function SessionSelector({
  session,
  sortOption,
  setSortOption,
  onChange,
}: SessionSelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex gap-[0.75rem]">
      <Dropdown
        onSelect={setSortOption}
        menuOptions={SESSION_TAGS}
        surfixIcon={<ArrowDown />}
        size="md"
        value={sortOption}
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
      />
      <NumberInput
        count={session[SESSION_KEY_MAP[sortOption]] || 0}
        onChange={onChange}
      />
    </div>
  );
}
