'use client';

import { useState } from 'react';
import DefaultProfileImage from '@/assets/icons/ic_default_profile.svg';
import EditIcon from '@/assets/icons/ic_edit.svg';
import ModalEdit from '@/components/commons/Modal/ModalEdit';

export default function UserCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileEdit = () => {
    setIsModalOpen(true);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = () => {
    // API연동
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex h-[15.625rem] w-[full] items-center justify-center gap-[3.3125rem] bg-[#36114E]">
        <div>
          <DefaultProfileImage width={128} height={128} />
        </div>
        <div className="flex flex-col text-gray-100">
          <div className="flex items-center gap-[0.625rem]">
            {/** API 수정된 후 불러오게 수정 */}
            <p className="text-[1.5rem] leading-[2.4rem] font-bold">
              사용자닉네임
            </p>
            <button type="submit" onClick={handleProfileEdit}>
              <EditIcon width={18} height={18} />
            </button>
          </div>
          <div className="flex items-center gap-[1rem] text-sm font-medium">
            <p>담당 세션</p>
            {/** API 수정된 후 여러개 불러오게 수정 */}
            <div className="h-[2rem] w-auto rounded-lg bg-[#34343A] px-[0.75rem] py-[0.375rem]">
              일렉 기타
            </div>
            <div className="h-[1.25rem] w-[0.0938rem] bg-gray-500" />
            <p>선호 장르</p>
            {/** API 수정된 후 여러개 불러오게 수정 */}
            <div className="h-[2rem] w-auto rounded-lg bg-[#34343A] px-[0.75rem] py-[0.375rem]">
              팝
            </div>
            <div className="h-[1.25rem] w-[0.0938rem] bg-gray-500" />
            <p>개설모임수</p>
            {/** API 수정된 후 불러오게 수정 아직 없음 */}
            <p>8</p>
            <div className="h-[1.25rem] w-[0.0938rem] bg-gray-500" />
            <p>작성글수</p>
            {/** API 수정된 후 불러오게 수정 아직 없음 */}
            <p>20</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        /** API 수정된 후 불러오게 수정 */
        <ModalEdit
          onCancel={handleModalCancel}
          onSubmit={handleModalSubmit}
          initialData={{
            image: undefined,
            session: ['일렉 기타'],
            genre: ['록'],
            introduction: '',
          }}
        />
      )}
    </>
  );
}
