import React from 'react';
import { cn } from '../lib/utils';

const StatBar = ({ label, value, max = 100, color = 'amber' }) => {
  const colors = {
    amber: 'bg-[#FFB000]',
    green: 'bg-[#9BBC0F]',
    red: 'bg-[#E74C3C]',
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-pixel text-sm text-[#4A3728] uppercase">{label}</span>
        <span className="font-pixel text-sm text-[#4A3728]">{value}/{max}</span>
      </div>
      <div className="h-6 bg-[#D4A574] border-4 border-[#4A3728] relative overflow-hidden">
        <div
          className={cn('h-full transition-all duration-500', colors[color])}
          style={{ width: `${(value / max) * 100}%` }}
        >
          <div className="h-full w-full opacity-30 bg-repeat" 
               style={{
                 backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
               }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatBar;