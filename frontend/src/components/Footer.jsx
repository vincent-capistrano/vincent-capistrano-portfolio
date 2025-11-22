import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4A3728] border-t-8 border-[#306230] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Game Over Screen */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#D4A574] border-4 border-[#FFB000] px-8 py-4 mb-6">
            <h3 className="font-pixel text-2xl text-[#4A3728] mb-2">THANK YOU FOR PLAYING!</h3>
            <p className="font-pixel text-sm text-[#4A3728] opacity-70">Press Start to Continue</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#D4A574] border-4 border-[#FFB000] p-4 text-center">
            <p className="font-pixel text-xs text-[#4A3728] opacity-70 mb-1">TOTAL PROJECTS</p>
            <p className="font-pixel text-2xl text-[#4A3728]">15+</p>
          </div>
          <div className="bg-[#D4A574] border-4 border-[#FFB000] p-4 text-center">
            <p className="font-pixel text-xs text-[#4A3728] opacity-70 mb-1">YEARS EXPERIENCE</p>
            <p className="font-pixel text-2xl text-[#4A3728]">3+</p>
          </div>
          <div className="bg-[#D4A574] border-4 border-[#FFB000] p-4 text-center">
            <p className="font-pixel text-xs text-[#4A3728] opacity-70 mb-1">SKILLS UNLOCKED</p>
            <p className="font-pixel text-2xl text-[#4A3728]">12+</p>
          </div>
          <div className="bg-[#D4A574] border-4 border-[#FFB000] p-4 text-center">
            <p className="font-pixel text-xs text-[#4A3728] opacity-70 mb-1">LEVEL REACHED</p>
            <p className="font-pixel text-2xl text-[#4A3728]">85</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t-4 border-[#FFB000]">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <p className="font-pixel text-sm text-[#FFB000]">MADE WITH</p>
            <Heart className="w-4 h-4 text-[#E74C3C] fill-current" />
            <p className="font-pixel text-sm text-[#FFB000]">BY VINCENT</p>
          </div>
          <p className="font-pixel text-xs text-[#D4A574] opacity-70">
            © {new Date().getFullYear()} Vincent Capistrano. All Rights Reserved.
          </p>
          <p className="font-pixel text-xs text-[#D4A574] opacity-50 mt-2">
            Built with React & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;