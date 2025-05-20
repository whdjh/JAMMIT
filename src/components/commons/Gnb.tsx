'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DefaultProfileImage from '@/assets/icons/ic_default_profile.svg';

export default function Gnb() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navItems = [
    { href: '/', label: '모임 찾기' },
    { href: '/wishlist', label: '찜한 모임' },
  ];

  // TODO: 로그인 정보 연결
  const isLoggedIn = false;
  const handleLogout = () => {
    console.log('로그아웃');
  };

  return (
    <header className="flex h-[3.75rem] w-full items-center justify-center bg-black px-[1.75rem]">
      <div className="flex w-full max-w-[74.875rem] items-center justify-between text-white">
        <nav className="flex gap-[1.5rem]">
          <Link
            href="/"
            data-active={pathname === '/'}
            className="opacity-80 data-[active=true]:opacity-100"
          >
            JAMMIT
          </Link>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              data-active={pathname === href}
              className="opacity-80 data-[active=true]:opacity-100"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div>
          {isLoggedIn ? (
            <div className="relative h-[2.5rem] w-[2.5rem]">
              <button
                className="cursor-pointer"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <DefaultProfileImage />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 w-[8.875rem] overflow-hidden rounded-[0.75rem] bg-white text-base text-black shadow-xl">
                  <Link
                    href="/mypage"
                    className="flex h-[2.75rem] w-full items-center justify-center hover:bg-gray-100"
                  >
                    마이페이지
                  </Link>
                  <button
                    className="block h-[2.75rem] w-full cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    로그아웃
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              data-active={pathname === '/login'}
              className="opacity-80 data-[active=true]:opacity-100"
              href="/login"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
