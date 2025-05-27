import React, { useCallback } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import ModalWrapper from './ModalWrapper';
import ProfileImageUpload from '../ProfileImageUpload';
import TextArea from '../Textarea';
import Button from '../Button';
import { EditFormData } from '@/types/modal';
import TagSection from '../TagSection';
import { SESSION_TAGS, GENRE_TAGS } from '@/constants/tags';

interface ModalEditProps {
  /** "확인" 버튼 클릭 시 실행할 콜백 */
  onSubmit: (data: EditFormData) => void;
  /** "x"버튼 클릭 시 실행할 콜백 */
  onCancel: () => void;
  /** 기존 프로필 정보를 가져오기 위한 초기값 */
  initialData: {
    image?: File;
    session: string[];
    genre: string[];
    introduction: string;
  };
}

export default function ModalEdit({
  onCancel,
  onSubmit,
  initialData = {
    image: undefined,
    session: [],
    genre: [],
    introduction: '',
  },
}: ModalEditProps) {
  const methods = useForm<EditFormData>({
    defaultValues: {
      image: initialData.image,
      session: initialData.session,
      genre: initialData.genre,
      introduction: initialData.introduction,
    },
    mode: 'onChange',
  });

  const { handleSubmit, control, setValue, watch } = methods;

  const imageFile = watch('image');

  const handleFileChange = (file: File) => {
    setValue('image', file);
  };

  const handleSeesionTagChange = useCallback(
    (selected: string[]) => {
      setTimeout(() => {
        setValue('session', selected);
      }, 0);
    },
    [setValue],
  );

  const handleGenreTagChange = useCallback(
    (selected: string[]) => {
      setTimeout(() => {
        setValue('genre', selected);
      }, 0);
    },
    [setValue],
  );

  const tagSections = [
    {
      key: 'session',
      label: '선호장르',
      tags: SESSION_TAGS,
      initialSelected: initialData.session,
      onChange: handleSeesionTagChange,
    },
    {
      key: 'genre',
      label: '세션',
      tags: GENRE_TAGS,
      initialSelected: initialData.genre,
      onChange: handleGenreTagChange,
    },
  ];

  const isValid = !!imageFile;

  return (
    <ModalWrapper
      title="프로필 수정하기"
      onClose={onCancel}
      className="relative mx-auto max-h-[80vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-4 text-black shadow-lg"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileImageUpload
            imageFile={imageFile}
            onFileChange={handleFileChange}
          />

          <div className="flex flex-col gap-4">
            {tagSections.map(
              ({ key, label, tags, initialSelected, onChange }) => (
                <TagSection
                  key={key}
                  label={label}
                  tags={tags}
                  initialSelected={initialSelected}
                  onChange={onChange}
                />
              ),
            )}
          </div>

          <div className="flex flex-col gap-2 pt-2 pb-2">
            <p className="text-lg font-semibold">자기소개(선택)</p>
            <Controller
              name="introduction"
              control={control}
              render={({ field }) => (
                <TextArea
                  placeholder="세션에 대한 간단한 소개 남겨주세요."
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          <Button
            variant="solid"
            size="large"
            type="submit"
            disabled={!isValid}
          >
            확인
          </Button>
        </form>
      </FormProvider>
    </ModalWrapper>
  );
}
