'use client';

import { ReactNode, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import DropdownMenuList from './DropdownMenuList';

interface DropdownProps {
  onSelect: (selectedDropdownMenu: string) => void;
  menuOptions: string[];
  singleIcon?: ReactNode;
  surfixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  isProfile?: boolean;
}

export default function Dropdown({
  onSelect,
  menuOptions,
  singleIcon,
  surfixIcon,
  prefixIcon,
  isProfile = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDropdownMenu, setSelectedDropdownMenu] = useState(
    menuOptions[0] ?? '',
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleDropdownMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (DropdownMenu: string) => {
    setSelectedDropdownMenu(DropdownMenu);
    setIsOpen(false);
    onSelect(DropdownMenu);
  };

  return (
    <div className="h-auto w-auto" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={handleDropdownMenu}
          className={`flex items-center justify-between gap-[0.625rem] rounded-xl border border-gray-100 px-[0.75rem] py-[0.5rem] text-gray-800 ${isProfile ? 'h-[5rem] w-[5rem] border-none p-0' : ''} `}
        >
          {isProfile ? (
            singleIcon
          ) : prefixIcon ? (
            <>
              {prefixIcon}
              <span>{selectedDropdownMenu}</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">{selectedDropdownMenu}</span>
              {surfixIcon}
            </>
          )}
        </button>

        {isOpen && (
          <DropdownMenuList menuOptions={menuOptions} onSelect={handleSelect} />
        )}
      </div>
    </div>
  );
}
