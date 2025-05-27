import type { Meta, StoryObj } from '@storybook/react';
import TextArea, { TextAreaProps } from '@/components/commons/Textarea';
import React, { useState } from 'react';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: '내용을 입력하세요',
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

function ControlledTextArea(props: Partial<TextAreaProps>) {
  const [value, setValue] = useState('');
  return (
    <TextArea
      placeholder="내용을 입력하세요"
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export const Default: Story = {
  render: (args) => <ControlledTextArea {...args} />,
};

export const ErrorState: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    error: true,
  },
};
