interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'teal' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-[#14B8A620] text-[#14B8A6] border border-[#14B8A6]',
    teal: 'bg-[#14B8A6] text-white',
    gray: 'bg-[#262626] text-[#737373] border border-[#262626]'
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
  };

  return (
    <span
      className={`inline-block rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
