import React, { useState } from 'react';
import { ExternalLink, Coins, Lock, Unlock } from 'lucide-react';
import PixelCard from './PixelCard';
import PixelButton from './PixelButton';
import { useGame } from '../context/GameContext';
import { toast } from '../hooks/use-toast';

const ProjectCard = ({ project }) => {
  const { coins, unlockProject, isProjectUnlocked } = useGame();
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const isUnlocked = !project.link || isProjectUnlocked(project.id);
  const unlockCost = project.unlockCost || 50;

  const handleUnlock = () => {
    if (coins >= unlockCost) {
      if (unlockProject(project.id, unlockCost)) {
        toast({
          title: "🎉 Project Unlocked!",
          description: `${project.title} is now accessible!`,
        });
        setShowUnlockModal(false);
      }
    } else {
      toast({
        title: "❌ Not Enough Coins!",
        description: `You need ${unlockCost - coins} more coins. Click the coin counter to earn more!`,
        variant: "destructive"
      });
    }
  };

  const handleLinkClick = (e) => {
    if (project.link && !isUnlocked) {
      e.preventDefault();
      setShowUnlockModal(true);
    }
  };

  return (
    <>
      <PixelCard>
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="bg-[#FFB000] border-4 border-[#4A3728] px-3 py-1 flex items-center space-x-2">
            <Coins className="w-4 h-4 text-[#4A3728]" />
            <span className="font-pixel text-xs text-[#4A3728]">{project.coins}</span>
          </div>
          {project.link && (
            <div className="relative">
              {isUnlocked ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A3728] hover:text-[#FFB000] transition-colors"
                  title="Visit Site"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              ) : (
                <button
                  onClick={handleLinkClick}
                  className="text-[#E74C3C] hover:text-[#FFB000] transition-colors relative"
                  title={`Unlock for ${unlockCost} coins`}
                >
                  <Lock className="w-5 h-5" />
                  <div className="absolute -top-2 -right-2 bg-[#E74C3C] border-2 border-[#4A3728] rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="font-pixel text-xs text-white">{unlockCost}</span>
                  </div>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Achievement Badge */}
        <div className="bg-[#D4A574] border-4 border-[#4A3728] p-3 mb-4 text-center">
          <div className="w-12 h-12 bg-[#FFB000] border-4 border-[#4A3728] mx-auto mb-2 flex items-center justify-center">
            <span className="font-pixel text-2xl text-[#4A3728]">★</span>
          </div>
          <p className="font-pixel text-xs text-[#4A3728]">{project.achievement}</p>
        </div>

        {/* Title */}
        <h3 className="font-pixel text-sm text-[#4A3728] mb-3 leading-tight">{project.title}</h3>

        {/* Description */}
        <p className="text-[#4A3728] text-sm leading-relaxed mb-4" style={{ fontFamily: 'monospace', fontSize: '12px' }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="border-t-4 border-[#D4A574] pt-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <div key={tech} className="bg-[#9BBC0F] border-2 border-[#4A3728] px-2 py-1">
                <span className="font-pixel text-xs text-[#306230]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </PixelCard>

      {/* Unlock Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setShowUnlockModal(false)}>
          <div className="bg-[#FAF4E8] border-8 border-[#4A3728] p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#D4A574] border-4 border-[#4A3728] mx-auto mb-4 flex items-center justify-center">
                <Lock className="w-8 h-8 text-[#4A3728]" />
              </div>
              <h3 className="font-pixel text-lg text-[#4A3728] mb-2">UNLOCK PROJECT?</h3>
            </div>

            <div className="bg-[#D4A574] border-4 border-[#4A3728] p-4 mb-6 text-center">
              <p className="font-pixel text-sm text-[#4A3728] mb-3">{project.title}</p>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Coins className="w-5 h-5 text-[#FFB000]" />
                <span className="font-pixel text-xl text-[#4A3728]">{unlockCost}</span>
              </div>
              <p className="font-pixel text-xs text-[#4A3728] opacity-70">COST TO UNLOCK</p>
            </div>

            <div className="bg-[#F5E6D3] border-4 border-[#4A3728] p-3 mb-6 text-center">
              <p className="font-pixel text-xs text-[#4A3728] mb-1">YOUR COINS</p>
              <div className="flex items-center justify-center space-x-2">
                <Coins className="w-4 h-4 text-[#FFB000]" />
                <span className="font-pixel text-lg text-[#4A3728]">{coins}</span>
              </div>
            </div>

            {coins >= unlockCost ? (
              <div className="space-y-3">
                <PixelButton onClick={handleUnlock} variant="primary" className="w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <Unlock className="w-4 h-4" />
                    <span>UNLOCK NOW</span>
                  </div>
                </PixelButton>
                <PixelButton onClick={() => setShowUnlockModal(false)} variant="outline" className="w-full">
                  CANCEL
                </PixelButton>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-[#E74C3C] border-4 border-[#4A3728] p-3 text-center">
                  <p className="font-pixel text-xs text-white">NOT ENOUGH COINS!</p>
                </div>
                <p className="text-center text-sm text-[#4A3728]" style={{ fontFamily: 'monospace' }}>
                  Click the coin counter at the top to earn more coins!
                </p>
                <PixelButton onClick={() => setShowUnlockModal(false)} variant="secondary" className="w-full">
                  CLOSE
                </PixelButton>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;