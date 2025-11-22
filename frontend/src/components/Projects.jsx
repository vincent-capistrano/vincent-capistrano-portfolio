import React from 'react';
import { ExternalLink, Coins } from 'lucide-react';
import PixelCard from './PixelCard';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#9BBC0F] border-4 border-[#4A3728] px-6 py-3 mb-4">
            <h2 className="font-pixel text-2xl sm:text-3xl text-[#306230] uppercase">Project Gallery</h2>
          </div>
          <div className="h-1 w-32 bg-[#4A3728] mx-auto mb-4"></div>
          <p className="font-pixel text-sm text-[#4A3728] opacity-70">Boss Battles Conquered</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <PixelCard key={project.id}>
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#FFB000] border-4 border-[#4A3728] px-3 py-1 flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-[#4A3728]" />
                  <span className="font-pixel text-xs text-[#4A3728]">{project.coins}</span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A3728] hover:text-[#FFB000] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
          ))}
        </div>

        {/* More Projects Message */}
        <div className="mt-12 text-center">
          <PixelCard hover={false} className="inline-block">
            <p className="font-pixel text-sm text-[#4A3728]">
              MORE LEVELS COMING SOON...
            </p>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;