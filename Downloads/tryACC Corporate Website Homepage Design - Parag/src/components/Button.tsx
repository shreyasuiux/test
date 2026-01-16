import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-8 py-4 transition-all duration-300';
  const variantStyles = {
    primary: 'bg-[#A020F0] text-white hover:bg-[#8A1ACF]',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-black'
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}
