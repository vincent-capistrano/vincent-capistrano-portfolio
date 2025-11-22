import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem('gameCoins');
    return savedCoins ? parseInt(savedCoins, 10) : 50; // Start with 50 coins
  });

  const [unlockedProjects, setUnlockedProjects] = useState(() => {
    const saved = localStorage.getItem('unlockedProjects');
    return saved ? JSON.parse(saved) : [];
  });

  const [clickCombo, setClickCombo] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(Date.now());

  useEffect(() => {
    localStorage.setItem('gameCoins', coins.toString());
  }, [coins]);

  useEffect(() => {
    localStorage.setItem('unlockedProjects', JSON.stringify(unlockedProjects));
  }, [unlockedProjects]);

  const addCoin = () => {
    const now = Date.now();
    const timeDiff = now - lastClickTime;
    
    // Combo system: if clicked within 1 second, increase combo
    if (timeDiff < 1000) {
      const newCombo = clickCombo + 1;
      setClickCombo(newCombo);
      // Bonus coins for combo
      const bonusCoins = Math.min(Math.floor(newCombo / 5), 3); // Max +3 bonus
      setCoins(prev => prev + 1 + bonusCoins);
    } else {
      setClickCombo(0);
      setCoins(prev => prev + 1);
    }
    
    setLastClickTime(now);
  };

  const spendCoins = (amount) => {
    if (coins >= amount) {
      setCoins(prev => prev - amount);
      return true;
    }
    return false;
  };

  const unlockProject = (projectId, cost) => {
    if (spendCoins(cost)) {
      setUnlockedProjects(prev => [...prev, projectId]);
      return true;
    }
    return false;
  };

  const isProjectUnlocked = (projectId) => {
    return unlockedProjects.includes(projectId);
  };

  return (
    <GameContext.Provider
      value={{
        coins,
        addCoin,
        spendCoins,
        unlockProject,
        isProjectUnlocked,
        clickCombo,
        unlockedProjects
      }}
    >
      {children}
    </GameContext.Provider>
  );
};