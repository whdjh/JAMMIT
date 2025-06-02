import Image, { StaticImageData } from 'next/image';
import { useCallback, useState } from 'react';
import Button from '@/components/commons/Button';
import ModalImgEdit from './ModalImgEdit';
import EmptyImageIcon from '@/assets/icons/ic_emptyimage.svg';

export default function ImageEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null,
  );

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSubmit = useCallback((image: StaticImageData) => {
    setSelectedImage(image);
    setIsOpen(false);
  }, []);

  return (
    <div className="relative mx-auto flex h-[22rem] w-full max-w-[84rem] items-center justify-center overflow-hidden rounded-[0.5rem] bg-[#393A41]">
      {selectedImage ? (
        <>
          <Image
            src={selectedImage}
            alt="선택된 이미지"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute top-[1.25rem] right-[1.25rem]">
            <Button variant="outline" size="small" onClick={handleOpenModal}>
              이미지 수정
            </Button>
          </div>
        </>
      ) : (
        <button
          type="button"
          className="flex cursor-pointer flex-col items-center justify-center"
          onClick={handleOpenModal}
        >
          <EmptyImageIcon />
          <p className="text-base text-gray-100">이미지 선택</p>
        </button>
      )}
      {isOpen && (
        <ModalImgEdit
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
