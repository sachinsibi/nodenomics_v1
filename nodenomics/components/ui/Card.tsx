import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'bordered' | 'highlighted';
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  variant = 'default',
  hover = true,
  className = ''
}: CardProps) {
  const baseStyles = 'rounded-lg p-6';

  const variantStyles = {
    default: 'bg-[#121212] border border-[#262626]',
    bordered: 'bg-[#121212] border-2 border-[#14B8A6]',
    highlighted: 'bg-gradient-to-br from-[#121212] to-[#0F766E20] border border-[#14B8A6]'
  };

  const hoverStyles = hover ? 'hover:border-[#14B8A6] transition-all duration-300' : '';

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
