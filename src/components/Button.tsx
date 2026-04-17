import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary:
      'bg-solar text-white hover:bg-orange-500 focus:ring-solar shadow-md hover:shadow-lg active:scale-95',
    secondary:
      'bg-green-deep text-white hover:bg-green-700 focus:ring-green-deep shadow-md hover:shadow-lg active:scale-95',
    'outline-white':
      'border-2 border-white text-white hover:bg-white hover:text-green-deep focus:ring-white active:scale-95',
    ghost:
      'border-2 border-solar text-solar hover:bg-solar hover:text-white focus:ring-solar active:scale-95',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
