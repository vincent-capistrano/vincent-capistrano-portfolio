import React from 'react';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import PixelCard from './PixelCard';
import StatBar from './StatBar';
import { profileData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFB000] border-4 border-[#4A3728] px-6 py-3 mb-4">
            <h2 className="font-pixel text-2xl sm:text-3xl text-[#4A3728] uppercase">Character Info</h2>
          </div>
          <div className="h-1 w-32 bg-[#4A3728] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Character Stats */}
          <div className="md:col-span-1">
            <PixelCard>
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-[#D4A574] border-4 border-[#4A3728] mx-auto mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-12 h-12 text-[#4A3728]" />
                  </div>
                </div>
                <h3 className="font-pixel text-xl text-[#4A3728] mb-2">{profileData.name}</h3>
                <p className="font-pixel text-sm text-[#4A3728] opacity-70">{profileData.title}</p>
              </div>

              <div className="space-y-4 mb-6">
                <StatBar label="Experience" value={85} max={100} color="amber" />
                <StatBar label="Coding Power" value={90} max={100} color="green" />
                <StatBar label="Team Work" value={95} max={100} color="amber" />
              </div>

              <div className="space-y-3 border-t-4 border-[#4A3728] pt-4">
                <div className="flex items-center space-x-2 text-[#4A3728]">
                  <MapPin className="w-4 h-4" />
                  <span className="font-pixel text-xs">{profileData.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#4A3728]">
                  <Mail className="w-4 h-4" />
                  <span className="font-pixel text-xs break-all">{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#4A3728]">
                  <Phone className="w-4 h-4" />
                  <span className="font-pixel text-xs">{profileData.phone}</span>
                </div>
              </div>
            </PixelCard>
          </div>

          {/* Bio and Stats */}
          <div className="md:col-span-2 space-y-6">
            {/* Bio */}
            <PixelCard>
              <div className="bg-[#D4A574] border-4 border-[#4A3728] px-4 py-2 mb-4">
                <h3 className="font-pixel text-lg text-[#4A3728] uppercase">About Player</h3>
              </div>
              <p className="text-[#4A3728] leading-relaxed mb-4" style={{ fontFamily: 'monospace' }}>
                {profileData.bio}
              </p>
            </PixelCard>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <PixelCard hover={false} className="text-center">
                <div className="bg-[#FFB000] border-4 border-[#4A3728] w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <span className="font-pixel text-2xl text-[#4A3728]">{profileData.stats.level}</span>
                </div>
                <p className="font-pixel text-xs text-[#4A3728] uppercase">Level</p>
              </PixelCard>

              <PixelCard hover={false} className="text-center">
                <div className="bg-[#9BBC0F] border-4 border-[#4A3728] w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <span className="font-pixel text-xl text-[#306230]">3+</span>
                </div>
                <p className="font-pixel text-xs text-[#4A3728] uppercase">Years XP</p>
              </PixelCard>

              <PixelCard hover={false} className="text-center">
                <div className="bg-[#FFB000] border-4 border-[#4A3728] w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <span className="font-pixel text-xl text-[#4A3728]">15+</span>
                </div>
                <p className="font-pixel text-xs text-[#4A3728] uppercase">Projects</p>
              </PixelCard>

              <PixelCard hover={false} className="text-center">
                <div className="bg-[#9BBC0F] border-4 border-[#4A3728] w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <span className="font-pixel text-xl text-[#306230]">∞</span>
                </div>
                <p className="font-pixel text-xs text-[#4A3728] uppercase">Passion</p>
              </PixelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;