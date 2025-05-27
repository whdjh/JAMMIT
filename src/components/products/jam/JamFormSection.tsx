'use client';

import Input from '@/components/commons/Input';
import TextArea from '@/components/commons/Textarea';
import Button from '@/components/commons/Button';
import TagSelector from '@/components/commons/TagSelector';
import { Controller } from 'react-hook-form';
import { useCallback, useEffect } from 'react';
import {
  Control,
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from 'react-hook-form';
import { JamFormData } from '@/types/modal';
import { GENRE_TAGS } from '@/constants/tags';

interface JamFormSectionProps {
  control: Control<JamFormData>;
  register: UseFormRegister<JamFormData>;
  watch: UseFormWatch<JamFormData>;
  setValue: UseFormSetValue<JamFormData>;
  isValid: boolean;
}

export default function JamFormSection({
  control,
  register,
  watch,
  setValue,
}: JamFormSectionProps) {
  const endDate = watch('end');
  const dayDate = watch('day');

  useEffect(() => {
    if (endDate && dayDate && dayDate < endDate) {
      setValue('day', '');
    }
  }, [endDate, dayDate, setValue]);

  const handleTagChange = useCallback(
    (selectedTags: string[]) => {
      setValue('genre', selectedTags);
    },
    [setValue],
  );

  return (
    <div className="flex h-[57.5rem] w-[61rem] flex-col bg-[#202024] p-[2.5rem]">
      <div className="flex flex-col gap-[1.5rem]">
        {/** 모임 제목 */}
        <Input
          name="jamName"
          type="text"
          label="모임 제목"
          placeholder="모임 제목을 작성하세요."
          rules={{ required: '모임 제목을 입력하세요.' }}
        />

        {/** TODO: kakaomap 검색 */}
        {/** 장소 */}
        <Input
          name="place"
          type="text"
          label="장소"
          placeholder="장소를 작성해주세요."
          rules={{
            required: '장소를 입력해주세요.',
            pattern: {
              value: /^[가-힣\s]+$/,
              message: '한글만 입력 가능합니다.',
            },
          }}
        />

        {/** TODO: input과 캘린더 커스텀해야됨 */}
        {/** 날짜 */}
        <div className="flex gap-[1.25rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="end" className="font-semibold">
              모집 마감일
            </label>
            <input
              id="end"
              type="date"
              {...register('end')}
              className="h-[2.75rem] w-[13.125rem] rounded border px-[1rem] py-[0.625rem]"
            />
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="day" className="font-semibold">
              모임 날짜
            </label>
            <input
              id="day"
              type="date"
              min={endDate || undefined}
              {...register('day', {
                validate: (value) => {
                  if (!endDate || !value) return true;
                  return (
                    value >= endDate ||
                    '모임 날짜는 모집 마감 날짜 이후여야 합니다.'
                  );
                },
              })}
              className="h-[2.75rem] w-[13.125rem] rounded border px-[1rem] py-[0.625rem]"
            />
          </div>
        </div>
      </div>
      <hr className="mx-auto my-[2.5rem] w-[56rem] bg-gray-800" />

      {/** 모집 세션 */}
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-lg font-semibold">모집 세션</p>
        <div className="flex justify-between">
          <div className="flex gap-[0.75rem]">
            {/** 드롭다운 자리 */}
            <input placeholder="드롭다운 자리임" type="number" />
            {/** 인원 input자리 */}
            <input placeholder="인원자리임" type="number" />
          </div>
          {/** 버튼 자리 */}
          <div className="flex gap-[0.75rem]">
            <Button variant="outline" size="small">
              임시 저장
            </Button>
            <Button variant="outline" size="small">
              삭제
            </Button>
          </div>
        </div>
      </div>
      <hr className="mx-auto my-[2.5rem] w-[56rem] bg-gray-800" />

      {/** 모임 장르 태그 */}
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-lg font-semibold">모임 장르</p>
        <TagSelector
          mode="selectable"
          tags={GENRE_TAGS}
          onChange={handleTagChange}
        />
      </div>
      <hr className="mx-auto my-[2.5rem] w-[56rem] bg-gray-800" />

      {/** 모임 소개 */}
      <div className="flex flex-col gap-[0.5rem]">
        <p className="text-lg font-semibold">소개글</p>
        <Controller
          name="introduction"
          control={control}
          render={({ field }) => (
            <TextArea
              placeholder="어떤 일이 일어날까요?"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
