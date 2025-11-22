import React from 'react';
import PixelCard from './PixelCard';
import ProjectCard from './ProjectCard';
import { projects } from '../data/mock';
import { useGame } from '../context/GameContext';
import { Coins } from 'lucide-react';

const Projects = () => {
  const { coins } = useGame();

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

        {/* Coin Info Banner */}
        <div className="mb-8">
          <PixelCard hover={false} className="bg-[#D4A574]">
            <div className="flex items-center justify-center space-x-4">
              <Coins className="w-6 h-6 text-[#FFB000]" />
              <p className="font-pixel text-xs text-[#4A3728] text-center">
                CLICK THE COIN COUNTER TO EARN MORE COINS! UNLOCK WORDPRESS SITES BY SPENDING COINS!
              </p>
            </div>
          </PixelCard>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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