'use client';

import ImageEdit from '@/components/products/jam/ImageEdit';
import GroupPageLayout from '@/components/commons/GroupPageLayout';
import Button from '@/components/commons/Button';
import JamFormSection from '@/components/products/jam/JamFormSection';
import { FormProvider, useForm } from 'react-hook-form';
import { JamFormData } from '@/types/jam';

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
    watch,
    setValue,
    formState: { isValid },
  } = methods;

  // API 연동
  const onSubmit = (data: JamFormData) => {
    console.log('폼 제출됨:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GroupPageLayout
          banner={<ImageEdit />}
          actionButtons={
            <Button
              variant="solid"
              className="mt-[2.5rem] w-[22.75rem]"
              type="submit"
              disabled={!isValid}
            >
              모임 만들기
            </Button>
          }
          isTab={false}
        >
          <JamFormSection
            control={control}
            watch={watch}
            setValue={setValue}
            isValid={isValid}
          />
        </GroupPageLayout>
      </form>
    </FormProvider>
  );
}
