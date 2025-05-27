import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/commons/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '버튼',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SolidLarge: Story = {
  args: {
    variant: 'solid',
    size: 'large',
  },
};

export const SolidSmall: Story = {
  args: {
    variant: 'solid',
    size: 'small',
  },
};

export const OutlineLarge: Story = {
  args: {
    variant: 'outline',
    size: 'large',
  },
};

export const OutlineSmall: Story = {
  args: {
    variant: 'outline',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'solid',
    size: 'large',
    disabled: true,
    children: '비활성',
  },
};
