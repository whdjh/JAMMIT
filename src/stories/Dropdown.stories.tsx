import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '@/components/commons/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    menuOptions: {
      control: { type: 'object' },
      description: '드롭다운에 표시될 메뉴 옵션들',
    },
    onSelect: { action: 'selected' },
    singleIcon: { control: false },
    prefixIcon: { control: false },
    surfixIcon: { control: false },
    isProfile: {
      control: 'boolean',
      description: '프로필 모드로 렌더링 여부',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// 기본 스토리 (기본 드롭다운)
export const Default: Story = {
  args: {
    menuOptions: ['Option 1', 'Option 2', 'Option 3'],
    onSelect: (value) => console.log('선택된 메뉴:', value),
  },
};

// prefixIcon이 있을 때
export const WithPrefixIcon: Story = {
  args: {
    menuOptions: ['Apple', 'Banana', 'Cherry'],
    prefixIcon: (
      <span role="img" aria-label="prefix">
        prefixImg
      </span>
    ),
    onSelect: (value) => console.log('선택된 메뉴:', value),
  },
};

// surfixIcon이 있을 때
export const WithSurfixIcon: Story = {
  args: {
    menuOptions: ['Red', 'Green', 'Blue'],
    surfixIcon: (
      <span role="img" aria-label="surfix">
        surfixImg
      </span>
    ),
    onSelect: (value) => console.log('선택된 메뉴:', value),
  },
};

// 프로필 모드 (singleIcon 사용)
export const ProfileMode: Story = {
  args: {
    menuOptions: ['Profile', 'Settings', 'Logout'],
    singleIcon: (
      <span role="img" aria-label="profile">
        profileImg
      </span>
    ),
    isProfile: true,
    onSelect: (value) => console.log('선택된 메뉴:', value),
  },
};
