import React from 'react';
import { cn } from '../lib/utils';

const PixelButton = ({ children, onClick, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-[#FFB000] hover:bg-[#E69D00] text-[#4A3728] border-[#4A3728]',
    secondary: 'bg-[#9BBC0F] hover:bg-[#8AAC00] text-[#306230] border-[#306230]',
    outline: 'bg-transparent hover:bg-[#F5E6D3] text-[#4A3728] border-[#4A3728]',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'pixel-border font-pixel px-6 py-3 text-sm uppercase tracking-wider',
        'hover:translate-y-[2px] active:translate-y-[4px]',
        'transition-transform duration-75 border-4',
        'shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)]',
        'hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)]',
        'active:shadow-none',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PixelButton;