import React from 'react';
import { clsx } from 'clsx';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'h-[2.75rem] rounded-[0.75rem] flex items-center justify-center text-[1rem] font-semibold cursor-pointer disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        solid:
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400',
        outline:
          'bg-white border border-solid text-blue-600 border-blue-600 hover:border-blue-500 hover:text-blue-500 active:border-blue-700 active:text-blue-700 disabled:border-gray-400 disabled:text-gray-400',
      },
      size: {
        large: 'w-[20.7rem]',
        small: 'w-[7.5rem]',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'large',
    },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  size?: 'large' | 'small';
  className?: string;
}

export default function Button({
  children,
  variant = 'solid',
  size = 'large',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
