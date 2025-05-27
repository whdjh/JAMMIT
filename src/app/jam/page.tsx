'use client';

import Input from '@/components/commons/Input';
import TextArea from '@/components/commons/Textarea';
import Button from '@/components/commons/Button';
import { JamFormData } from '@/types/modal';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';

const NUMBER_VALIDATION = {
  required: '필수 입력 값',
  min: { value: 0, message: '0 이상의 숫자만 입력 가능합니다.' },
  pattern: { value: /^[0-9]+$/, message: '숫자만 입력 가능합니다.' },
};

const PEOPLE_FIELDS = [
  { name: 'electricGuitar', label: '일렉기타' },
  { name: 'acousticGuitar', label: '통기타' },
  { name: 'bass', label: '베이스' },
  { name: 'drum', label: '드럼' },
  { name: 'vocal', label: '보컬' },
  { name: 'keyboard', label: '건반' },
  { name: 'percussion', label: '타악기' },
  { name: 'string', label: '현악기' },
];

interface ModalJamProps {
  /** "확인" 버튼 클릭 시 실행할 콜백 */
  onSubmit: (data: JamFormData) => void;
}

export default function JamPage({ onSubmit }: ModalJamProps) {
  const methods = useForm<JamFormData>({
    defaultValues: {
      jamName: '',
      place: '',
      day: '',
      end: '',
      tag: [],
      introduction: '',
    },
    mode: 'onChange',
  });
  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { isValid },
  } = methods;

  // 모집 마감 날짜를 실시간으로 감시
  const endDate = watch('end');
  const dayDate = watch('day');

  // 모집 마감 날짜가 변경될 때 잼 날짜가 유효하지 않으면 초기화
  useEffect(() => {
    if (endDate && dayDate && dayDate < endDate) {
      setValue('day', '');
    }
  }, [endDate, dayDate, setValue]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/** TODO: 순서 임의 작업 디자인 나오면 변경 예정*/}
        {/** zam이름 */}
        <Input
          name="jamName"
          type="text"
          label="잼 이름"
          placeholder="잼 이름을 작성해주세요."
          rules={{
            required: '잼 이름을 입력해주세요.',
          }}
        />

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

        {/** 필요한 인원 */}
        <div className="flex flex-col gap-2 pt-2">
          <p className="text-lg font-semibold">세션 소개</p>
          <div className="flex flex-wrap gap-1 gap-x-5">
            {PEOPLE_FIELDS.map(({ name, label }) => (
              <div className="w-20" key={name}>
                <Input
                  name={`people.${name}`}
                  type="text"
                  label={label}
                  placeholder="인원"
                  rules={NUMBER_VALIDATION}
                />
              </div>
            ))}
          </div>
        </div>

        {/** 태그 */}
        <div className="flex flex-col gap-2 pt-2">
          <p className="text-lg font-semibold">태그자리</p>
        </div>

        {/** 간단 소개 */}
        <div className="flex flex-col gap-2 pt-2">
          <p className="text-lg font-semibold">세션 소개</p>
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

        {/** 날짜 입력 (가로 배열) */}
        <div className="flex gap-4 pt-2">
          {/** 모집 마감 날짜 */}
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="end" className="font-semibold">
              잼 멤버 모집 마감 날짜
            </label>
            <input
              id="end"
              type="date"
              {...register('end')}
              className="rounded border p-2"
            />
          </div>

          {/** 모임 날짜 */}
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="day" className="font-semibold">
              잼 날짜
            </label>
            <input
              id="day"
              type="date"
              min={endDate || undefined} // 모집 마감 날짜 이후만 선택 가능
              {...register('day', {
                validate: (value) => {
                  if (!endDate) return true; // 모집 마감 날짜가 없으면 검증 안함
                  if (!value) return true; // 모임 날짜가 없으면 검증 안함
                  return (
                    value >= endDate ||
                    '모임 날짜는 모집 마감 날짜 이후여야 합니다.'
                  );
                },
              })}
              className="rounded border p-2"
            />
          </div>
        </div>

        {/** 모임 이미지 업로드 */}
        <div className="flex flex-col gap-2 pt-2 pb-2">
          <label htmlFor="image" className="font-semibold">
            잼 이미지 업로드
          </label>
          <Controller
            name="image"
            control={control}
            rules={{
              required: '이미지를 선택해주세요.',
              validate: (file: File) => {
                if (!file) return '이미지를 선택해주세요.';
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
                return (
                  allowedTypes.includes(file.type) ||
                  'jpeg, png, gif 형식의 이미지만 업로드 가능합니다.'
                );
              },
            }}
            render={({ field, fieldState }) => {
              const fileName = field.value ? field.value.name : '';
              return (
                <div className="flex items-center gap-2">
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      field.onChange(file);
                    }}
                  />
                  <div className="flex w-full flex-row items-center gap-4">
                    {/* 파일명이 플로팅 되어 보이는 input 박스 */}
                    <div className="relative w-[22.5rem] rounded border px-3 py-2 pr-10 text-gray-700">
                      {fileName ? (
                        <span className="absolute top-1 left-3 mt-2 bg-white px-1 text-sm text-gray-500"></span>
                      ) : null}
                      <input
                        type="text"
                        readOnly
                        value={fileName}
                        placeholder="파일을 선택해주세요."
                        className="w-full bg-transparent outline-none"
                      />
                    </div>

                    {/* 커스텀 버튼: 클릭하면 파일 선택창 열림 */}
                    <label
                      htmlFor="image"
                      className="cursor-pointer rounded bg-blue-600 px-4 py-2 whitespace-nowrap text-white"
                    >
                      파일 찾기
                    </label>
                  </div>

                  {/* 에러 메시지 */}
                  {fieldState.error && (
                    <p className="ml-4 text-sm text-red-600">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              );
            }}
          />
        </div>

        <Button variant="solid" size="large" type="submit" disabled={!isValid}>
          확인
        </Button>
      </form>
    </FormProvider>
  );
}
