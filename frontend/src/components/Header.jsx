import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CoinButton from './CoinButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF4E8] border-b-4 border-[#4A3728] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#FFB000] border-4 border-[#4A3728] flex items-center justify-center">
              <span className="font-pixel text-2xl text-[#4A3728]">V</span>
            </div>
            <span className="font-pixel text-xl text-[#4A3728] hidden sm:block">VINCENT</span>
          </div>

          {/* Coins Display - Clickable */}
          <div className="hidden md:block">
            <CoinButton />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('about')}
              className="font-pixel text-sm px-4 py-2 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="font-pixel text-sm px-4 py-2 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="font-pixel text-sm px-4 py-2 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase"
            >
              Quest Log
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-pixel text-sm px-4 py-2 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-pixel text-sm px-4 py-2 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#4A3728]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-4 border-[#4A3728] bg-[#FAF4E8]">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="font-pixel text-sm px-4 py-3 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="font-pixel text-sm px-4 py-3 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="font-pixel text-sm px-4 py-3 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase text-left"
              >
                Quest Log
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="font-pixel text-sm px-4 py-3 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-pixel text-sm px-4 py-3 text-[#4A3728] hover:bg-[#F5E6D3] transition-colors uppercase text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;