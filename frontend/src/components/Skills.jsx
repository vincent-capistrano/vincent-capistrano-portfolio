import React from 'react';
import { Code2, Globe, Database, Layers, FileCode, Layout, Cpu, Sparkles, Package, Server, GitBranch, Monitor } from 'lucide-react';
import PixelCard from './PixelCard';
import StatBar from './StatBar';
import { skills } from '../data/mock';

const iconMap = {
  Code2, Globe, Database, Layers, FileCode, Layout, Cpu, Sparkles, Package, Server, GitBranch, Monitor
};

const Skills = () => {
  const categories = [
    { name: 'Languages', filter: 'language', color: 'amber' },
    { name: 'Frameworks', filter: 'framework', color: 'green' },
    { name: 'Database & Tools', filter: ['database', 'tool', 'library', 'cms', 'server'], color: 'amber' }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#9BBC0F] border-4 border-[#4A3728] px-6 py-3 mb-4">
            <h2 className="font-pixel text-2xl sm:text-3xl text-[#306230] uppercase">Power-Ups & Skills</h2>
          </div>
          <div className="h-1 w-32 bg-[#4A3728] mx-auto mb-4"></div>
          <p className="font-pixel text-sm text-[#4A3728] opacity-70">Unlocked Abilities</p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => 
              Array.isArray(category.filter) 
                ? category.filter.includes(skill.category)
                : skill.category === category.filter
            );

            return (
              <div key={category.name}>
                <div className="bg-[#D4A574] border-4 border-[#4A3728] px-4 py-2 mb-6 inline-block">
                  <h3 className="font-pixel text-lg text-[#4A3728] uppercase">{category.name}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {categorySkills.map((skill) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <PixelCard key={skill.name} hover={false}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#FFB000] border-4 border-[#4A3728] flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-[#4A3728]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-pixel text-sm text-[#4A3728] mb-3">{skill.name}</h4>
                            <StatBar label="Proficiency" value={skill.level} max={100} color={category.color} />
                          </div>
                        </div>
                      </PixelCard>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Badges */}
        <div className="mt-12">
          <div className="bg-[#D4A574] border-4 border-[#4A3728] px-4 py-2 mb-6 inline-block">
            <h3 className="font-pixel text-lg text-[#4A3728] uppercase">Achievements Unlocked</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Code Warrior', 'Full-Stack', 'DB Master', 'IoT Pro', 'Web Wizard', 'Team Player'].map((achievement, index) => (
              <PixelCard key={achievement} hover={false} className="text-center p-4">
                <div className="w-16 h-16 bg-[#FFB000] border-4 border-[#4A3728] mx-auto mb-2 flex items-center justify-center">
                  <span className="font-pixel text-2xl text-[#4A3728]">★</span>
                </div>
                <p className="font-pixel text-xs text-[#4A3728]">{achievement}</p>
              </PixelCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;