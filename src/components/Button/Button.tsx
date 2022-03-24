import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
  className?: string;
  pill?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'normal' | 'large';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill,
      disabled = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={clsx(
        'focus:outline-none transition ease-in-out duration-300',
        {
          'rounded-full': pill,
          'opacity-50 cursor-not-allowed': disabled,
          'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white':
            variant === 'primary',
          'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white':
            variant === 'secondary',
          'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white':
            variant === 'danger',
          'px-2 py-1 text-sm': size === 'small',
          'px-4 py-2': size === 'normal',
          'px-8 py-3 text-lg': size === 'large',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
