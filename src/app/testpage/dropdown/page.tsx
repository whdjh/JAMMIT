'use client';

import { useState } from 'react';
import Dropdown from '@/components/commons/Dropdown';
import useSortedData from '@/hooks/useSortByOption';
import ArrowDown from '@/assets/icons/ic_arrowdown.svg';
import DefaultProfileImage from '@/assets/icons/ic_default_profile.svg';
import { useRouter } from 'next/navigation';

const OPTION = ['최신 순', '리뷰 높은 순', '참여 인원 순'];
const PROFILE_OPTIONS = ['마이페이지', '로그아웃'];

export default function Home() {
  const [sortOption, setSortOption] = useState(OPTION[0]);
  const sortedData = useSortedData(sortOption);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  const handleProfileSelect = (option: string) => {
    if (option === '마이페이지') {
      router.push('/mypage');
    } else if (option === '로그아웃') {
      // 로그아웃 처리 함수 호출
      handleLogout();
    }
  };

  const handleLogout = () => {
    alert('로그아웃버튼클릭');
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="mb-25">
        {isLoggedIn ? (
          <Dropdown
            menuOptions={PROFILE_OPTIONS}
            onSelect={handleProfileSelect}
            singleIcon={<DefaultProfileImage />}
            isProfile
          />
        ) : (
          <button
            className="rounded-md bg-orange-400 px-4 py-2 text-white"
            onClick={() => setIsLoggedIn(true)}
          >
            로그인
          </button>
        )}
      </div>
      <Dropdown
        onSelect={setSortOption}
        menuOptions={OPTION}
        prefixIcon={<ArrowDown />}
      />
      <div className="mt-4 space-y-2">
        {sortedData.map((item) => (
          <div key={item.id} className="rounded-lg border px-4 py-2 shadow-sm">
            <p className="font-semibold">{item.title}</p>
            <p>리뷰: {item.review}</p>
            <p>참여 인원: {item.participants}</p>
            <p>작성일: {item.createdAt}</p>
          </div>
        ))}
      </div>
    </>
  );
}
