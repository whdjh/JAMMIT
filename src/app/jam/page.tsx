'use client';

import Image from 'next/image';
import bannerImages from '@/constants/bannerImages';
import GroupPageLayout from '@/components/commons/GroupPageLayout';
import Button from '@/components/commons/Button';
import JamFormSection from '@/components/products/jam/JamFormSection';
import MemberInfoSection from '@/components/products/group/MemberInfoSection';
import { FormProvider, useForm } from 'react-hook-form';
import { JamFormData } from '@/types/modal';
import { useQueryTab } from '@/hooks/useQueryTab';

export default function JamPage() {
  const methods = useForm<JamFormData>({
    defaultValues: {
      jamName: '',
      place: '',
      day: '',
      end: '',
      genre: [],
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

  const { activeTab } = useQueryTab<'recruit' | 'members'>('tab', 'recruit', [
    'recruit',
    'members',
  ]);

  const onSubmit = (data: JamFormData) => {
    console.log('폼 제출됨:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GroupPageLayout
          banner={
            <div className="relative h-[22rem] w-full overflow-hidden rounded-[0.5rem]">
              <Image
                src={bannerImages[0]}
                alt="모임 배너"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          }
          actionButtons={
            <div className="flex flex-col gap-[1.25rem]">
              <Button variant="outline" className="w-[22.75rem]">
                임시 저장
              </Button>
              <Button
                variant="solid"
                className="w-[22.75rem]"
                type="submit"
                disabled={!isValid}
              >
                모임 만들기
              </Button>
            </div>
          }
        >
          {activeTab === 'recruit' ? (
            <JamFormSection
              control={control}
              register={register}
              watch={watch}
              setValue={setValue}
              isValid={isValid}
            />
          ) : (
            <MemberInfoSection />
          )}
        </GroupPageLayout>
      </form>
    </FormProvider>
  );
}
