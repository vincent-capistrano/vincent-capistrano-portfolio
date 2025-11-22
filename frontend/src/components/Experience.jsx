import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import PixelCard from './PixelCard';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFB000] border-4 border-[#4A3728] px-6 py-3 mb-4">
            <h2 className="font-pixel text-2xl sm:text-3xl text-[#4A3728] uppercase">Quest Log</h2>
          </div>
          <div className="h-1 w-32 bg-[#4A3728] mx-auto mb-4"></div>
          <p className="font-pixel text-sm text-[#4A3728] opacity-70">Completed Missions</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#4A3728]"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <PixelCard>
                    {/* Level Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-[#FFB000] border-4 border-[#4A3728] px-3 py-1">
                        <span className="font-pixel text-xs text-[#4A3728] uppercase">{exp.level}</span>
                      </div>
                      <Briefcase className="w-5 h-5 text-[#4A3728]" />
                    </div>

                    {/* Company & Role */}
                    <h3 className="font-pixel text-lg text-[#4A3728] mb-2">{exp.company}</h3>
                    <p className="font-pixel text-sm text-[#4A3728] opacity-80 mb-4">{exp.role}</p>

                    {/* Period & Location */}
                    <div className="space-y-2 mb-4 pb-4 border-b-4 border-[#D4A574]">
                      <div className="flex items-center space-x-2 text-[#4A3728]">
                        <Calendar className="w-4 h-4" />
                        <span className="font-pixel text-xs">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#4A3728]">
                        <MapPin className="w-4 h-4" />
                        <span className="font-pixel text-xs">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#4A3728] text-sm leading-relaxed" style={{ fontFamily: 'monospace' }}>
                      {exp.description}
                    </p>
                  </PixelCard>
                </div>

                {/* Timeline Marker */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-8 h-8 bg-[#9BBC0F] border-4 border-[#4A3728] relative z-10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#4A3728]"></div>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certification */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Education */}
          <PixelCard>
            <div className="bg-[#9BBC0F] border-4 border-[#4A3728] px-4 py-2 mb-4">
              <h3 className="font-pixel text-lg text-[#306230] uppercase">Education</h3>
            </div>
            <div className="space-y-3">
              <h4 className="font-pixel text-sm text-[#4A3728]">Bachelor's Degree in Computer Science</h4>
              <p className="text-[#4A3728] text-sm" style={{ fontFamily: 'monospace' }}>EARIST Cavite Campus</p>
              <p className="font-pixel text-xs text-[#4A3728] opacity-70">2017 - 2022</p>
              <div className="bg-[#FFB000] border-4 border-[#4A3728] px-3 py-2 inline-block mt-3">
                <p className="font-pixel text-xs text-[#4A3728]">★ Best Thesis Award 2022</p>
              </div>
            </div>
          </PixelCard>

          {/* Certification */}
          <PixelCard>
            <div className="bg-[#FFB000] border-4 border-[#4A3728] px-4 py-2 mb-4">
              <h3 className="font-pixel text-lg text-[#4A3728] uppercase">Certification</h3>
            </div>
            <div className="space-y-3">
              <h4 className="font-pixel text-sm text-[#4A3728]">ASP.NET MVC 5 Development</h4>
              <p className="text-[#4A3728] text-sm" style={{ fontFamily: 'monospace' }}>MIS.NET Education Certificate</p>
              <p className="font-pixel text-xs text-[#4A3728] opacity-70">August 2024</p>
              <div className="bg-[#9BBC0F] border-4 border-[#4A3728] px-3 py-2 inline-block mt-3">
                <p className="font-pixel text-xs text-[#306230]">Microsoft Partner - Gold Learning</p>
              </div>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};

export default Experience;