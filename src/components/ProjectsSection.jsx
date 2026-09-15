import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

export const ProjectsSection = () => {
  const { t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web App', 'Design System', 'E-Commerce', 'UI/UX'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bento-lavender/10 text-bento-lavender text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('projectsSection.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {t('projectsSection.title')}
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-2 max-w-xl">
            {t('projectsSection.subtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                    : 'bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? t('projectsSection.categoryAll') : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  );
};

export default ProjectsSection;
