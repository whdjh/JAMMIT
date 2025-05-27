import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/commons/Input';
import { FormProvider, useForm } from 'react-hook-form';

function Wrapper({ children }: { children: React.ReactNode }) {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
}

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [
    (Story) => (
      <Wrapper>
        <div style={{ maxWidth: '400px', padding: '1rem' }}>
          <Story />
        </div>
      </Wrapper>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'react-hook-form에서 사용하는 name 속성',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: 'default',
    type: 'text',
    label: '기본 텍스트',
    placeholder: '내용을 입력하세요',
  },
};

export const WithValidation: Story = {
  args: {
    name: 'email',
    type: 'email',
    label: '이메일',
    placeholder: 'email@example.com',
    rules: {
      required: '이메일은 필수입니다.',
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: '올바른 이메일 형식을 입력하세요.',
      },
    },
  },
};
