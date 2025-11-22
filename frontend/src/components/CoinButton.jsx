import React, { useState } from 'react';
import { Coins, Plus } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { cn } from '../lib/utils';

const CoinButton = () => {
  const { coins, addCoin, clickCombo } = useGame();
  const [floatingCoins, setFloatingCoins] = useState([]);
  const [shake, setShake] = useState(false);

  const handleClick = () => {
    addCoin();
    setShake(true);
    setTimeout(() => setShake(false), 200);

    // Add floating coin animation
    const id = Date.now();
    setFloatingCoins(prev => [...prev, id]);
    setTimeout(() => {
      setFloatingCoins(prev => prev.filter(coinId => coinId !== id));
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={cn(
          'flex items-center space-x-2 bg-[#D4A574] border-4 border-[#4A3728] px-4 py-2',
          'hover:bg-[#FFB000] transition-all duration-200',
          'active:translate-y-[2px]',
          shake && 'animate-shake'
        )}
        title="Click to earn coins!"
      >
        <Coins className="w-5 h-5 text-[#FFB000]" />
        <span className="font-pixel text-[#4A3728]">{coins}</span>
      </button>

      {/* Floating +1 animations */}
      {floatingCoins.map(id => (
        <div
          key={id}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none animate-float-up"
        >
          <div className="flex items-center space-x-1 bg-[#FFB000] border-2 border-[#4A3728] px-2 py-1">
            <Plus className="w-3 h-3 text-[#4A3728]" />
            <span className="font-pixel text-xs text-[#4A3728]">
              {clickCombo >= 5 ? (Math.floor(clickCombo / 5) + 1) : '1'}
            </span>
          </div>
        </div>
      ))}

      {/* Combo indicator */}
      {clickCombo >= 5 && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div className="bg-[#9BBC0F] border-2 border-[#4A3728] px-2 py-1 animate-pulse">
            <span className="font-pixel text-xs text-[#306230]">
              COMBO x{clickCombo}!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinButton;