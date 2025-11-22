import React, { useState, useEffect } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import PixelButton from './PixelButton';
import { profileData } from '../data/mock';

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `PLAYER: ${profileData.name.toUpperCase()}`;

  useEffect(() => {
    setShowText(true);
  }, []);

  useEffect(() => {
    if (showText && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [showText, displayedText, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Pixel Grid Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #4A3728, #4A3728 1px, transparent 1px, transparent 16px), repeating-linear-gradient(90deg, #4A3728, #4A3728 1px, transparent 1px, transparent 16px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Scanline Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          animation: 'scanline 8s linear infinite'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-20">
        {/* Game Start Box */}
        <div className="bg-[#FAF4E8] border-8 border-[#4A3728] p-8 sm:p-12 shadow-[16px_16px_0px_0px_rgba(74,55,40,0.3)]">
          {/* Pixel Character */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-[#D4A574] border-4 border-[#4A3728] relative overflow-hidden">
              {/* Simple pixel character */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-1">
                  {/* Head */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-[#FFB000] border-2 border-[#4A3728]"></div>
                  </div>
                  {/* Body */}
                  <div className="flex justify-center">
                    <div className="w-16 h-8 bg-[#9BBC0F] border-2 border-[#4A3728]"></div>
                  </div>
                  {/* Legs */}
                  <div className="flex justify-center space-x-1">
                    <div className="w-6 h-10 bg-[#306230] border-2 border-[#4A3728]"></div>
                    <div className="w-6 h-10 bg-[#306230] border-2 border-[#4A3728]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typing Text */}
          <div className="mb-6 min-h-[60px]">
            <h1 className="font-pixel text-2xl sm:text-4xl text-[#4A3728] mb-4">
              {displayedText}
              <span className="animate-pulse">_</span>
            </h1>
          </div>

          {/* Title */}
          <div className="bg-[#D4A574] border-4 border-[#4A3728] p-4 mb-6">
            <p className="font-pixel text-lg sm:text-xl text-[#4A3728] uppercase">
              {profileData.title}
            </p>
          </div>

          {/* Tagline */}
          <p className="font-pixel text-sm sm:text-base text-[#4A3728] mb-8 opacity-80">
            {profileData.tagline}
          </p>

          {/* Start Button */}
          <div className="space-y-4">
            <PixelButton onClick={scrollToAbout} variant="primary" className="w-full sm:w-auto">
              <div className="flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" fill="currentColor" />
                <span>Press Start</span>
              </div>
            </PixelButton>
            
            <div className="flex justify-center">
              <div className="bg-[#9BBC0F] border-4 border-[#4A3728] px-4 py-2">
                <p className="font-pixel text-xs text-[#306230]">LEVEL {profileData.stats.level}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#4A3728] mx-auto" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;