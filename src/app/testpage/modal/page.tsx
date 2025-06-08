'use client';

import { useState, useCallback } from 'react';
import ModalInteraction from '@/components/commons/Modal/ModalInteraction';
import ModalReview from '@/components/commons/Modal/ModalReview';
// import ModalEdit from '@/components/commons/Modal/ModalEdit';
import { ReviewFormData } from '@/types/modal';
// import { EditFormData } from '@/types/modal';

type ModalType = 'withCancel' | 'withoutCancel' | 'review' | 'edit' | null;

export default function Home() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleOpenModal = useCallback((type: ModalType) => {
    setModalType(type);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalType(null);
  }, []);

  /** API 연결부 */
  const handleSubmitConfirm = useCallback(() => {
    alert('확인되었습니다!');
    setModalType(null);
  }, []);

  /** API 연결부 */
  const handleSubmitReview = useCallback((data: ReviewFormData) => {
    alert(JSON.stringify(data, null, 2));
    setModalType(null);
  }, []);

  /** API 연결부 */
  // const handleSubmitEdit = useCallback((data: EditFormData) => {
  //   alert(JSON.stringify(data, null, 2));
  //   setModalType(null);
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <button onClick={() => handleOpenModal('withCancel')}>
        나가는 모달 테스트
      </button>

      <button onClick={() => handleOpenModal('withoutCancel')}>
        가입 완료 모달 테스트
      </button>

      <button onClick={() => handleOpenModal('review')}>
        리뷰 모달 테스트
      </button>

      <button onClick={() => handleOpenModal('edit')}>
        프로필 수정 모달 테스트
      </button>

      {modalType === 'withCancel' && (
        <ModalInteraction
          message={`정말 나가시겠어요?\n작성된 내용이 모두 삭제됩니다.`}
          onConfirm={handleSubmitConfirm}
          onClose={handleCloseModal}
          isShowCancel={true}
        />
      )}

      {modalType === 'withoutCancel' && (
        <ModalInteraction
          message="가입이 완료되었습니다!"
          onConfirm={handleSubmitConfirm}
          onClose={handleCloseModal}
          isShowCancel={false}
        />
      )}

      {modalType === 'review' && (
        <ModalReview
          onCancel={handleCloseModal}
          onSubmit={handleSubmitReview}
        />
      )}

      {/* {modalType === 'edit' && (
        <ModalEdit
          onCancel={handleCloseModal}
          onSubmit={handleSubmitEdit}
          initialData={{
            image: undefined,
            session: [],
            genre: [],
            introduction: '',
          }}
        />
      )} */}
    </main>
  );
}
