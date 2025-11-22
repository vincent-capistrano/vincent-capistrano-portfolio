import React from 'react';
import { cn } from '../lib/utils';

const PixelCard = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        'bg-[#FAF4E8] border-4 border-[#4A3728] p-6',
        'shadow-[8px_8px_0px_0px_rgba(74,55,40,0.3)]',
        hover && 'hover:translate-y-[-4px] hover:shadow-[8px_12px_0px_0px_rgba(74,55,40,0.3)]',
        'transition-all duration-200',
        className
      )}
    >
      {children}
    </div>
  );
};

export default PixelCard;