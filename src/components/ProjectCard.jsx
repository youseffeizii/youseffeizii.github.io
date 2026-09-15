import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles, Layers } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProjectCard = ({ project, index = 0 }) => {
  const { t, language, setSelectedProject } = useApp();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Automated live screenshot preview via Microlink API
  const screenshotUrl = `https://api.microlink.io?url=${encodeURIComponent(
    project.liveUrl
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  const title = project.title[language] || project.title.en;
  const description = project.description[language] || project.description.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] bg-white dark:bg-[#151924] border border-neutral-200/90 dark:border-white/10 shadow-bento dark:shadow-bento-dark transition-all duration-300"
    >
      {/* Top Media / Live Screenshot Preview Header */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-[#0D1017] border-b border-neutral-100 dark:border-white/5">
        
        {/* Fake Browser Chrome Header for sleek presentation */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-white/70 dark:bg-[#151924]/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 truncate max-w-[160px]">
            {project.liveUrl.replace(/^https?:\/\//, '')}
          </span>
          <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400">
            {project.stats}
          </span>
        </div>

        {/* Loading Shimmer Skeleton */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 pt-8 flex flex-col items-center justify-center p-6 skeleton-shimmer">
            <div className="w-10 h-10 rounded-2xl bg-neutral-300/30 dark:bg-white/10 flex items-center justify-center animate-pulse">
              <Layers className="w-5 h-5 text-neutral-400" />
            </div>
            <span className="text-[11px] font-medium text-neutral-400 mt-2">
              Fetching live preview...
            </span>
          </div>
        )}

        {/* Dynamic Live Screenshot Image */}
        {!imageError ? (
          <img
            src={screenshotUrl}
            alt={`${title} live screenshot`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-top pt-8 transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          /* Graceful Fallback Mockup Card when network/screenshot fails */
          <div className="w-full h-full pt-8 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-900/20 via-neutral-900/10 to-pink-900/20">
            <div className="w-12 h-12 rounded-2xl bg-bento-lavender/20 flex items-center justify-center text-bento-lavender mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-neutral-800 dark:text-white">
              {title}
            </span>
            <span className="text-xs text-neutral-500 font-mono mt-1">
              {project.category}
            </span>
          </div>
        )}

        {/* Hover overlay with Quick Preview trigger */}
        <div className="absolute inset-0 pt-8 bg-neutral-900/40 dark:bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => setSelectedProject(project)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-neutral-900 font-bold text-xs shadow-lg hover:scale-105 transition-transform"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('projectsSection.preview')}</span>
          </button>
        </div>

      </div>

      {/* Bottom Content Area */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        
        <div>
          {/* Category Chip */}
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-bento-lavender mb-1.5">
            {project.category}
          </span>

          {/* Project Title */}
          <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-bento-lavender transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: "View Live" (مشاهده سایت) and GitHub Link */}
        <div className="flex items-center gap-2.5 pt-6 mt-4 border-t border-neutral-100 dark:border-white/5">
          
          {/* Required "View Live" direct link button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-bento-lavender dark:hover:bg-indigo-500 shadow-sm transition-all duration-200 group/link"
          >
            <span>{t('projectsSection.viewLive')}</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          {/* Secondary Code Link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source on GitHub"
              className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-200 border border-neutral-200/60 dark:border-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
