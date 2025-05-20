'use client';

import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Input from '@/components/commons/Input';

interface FormValues {
  email: string;
  password: string;
}

export default function Home() {
  // mode를 적절히 교체하면 됩니다.
  const methods = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
        className="p-4"
      >
        <Input
          name="email"
          type="text"
          label="아이디"
          placeholder="이메일을 입력해주세요."
          rules={{
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식을 입력해주세요.',
            },
          }}
        />
        <Input
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호을 입력해주세요."
          rules={{
            required: '비밀번호은 필수 입력입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다.',
            },
            maxLength: {
              value: 12,
              message: '비밀번호는 최대 12자 이하여야 합니다.',
            },
          }}
        />
        <button
          type="submit"
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
