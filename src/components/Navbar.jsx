import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export const Navbar = () => {
  const { t, isRtl } = useApp();

  const handleContactClick = () => {
    window.location.href = `mailto:${t('hero.email')}?subject=Portfolio%20Inquiry`;
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      <nav className="flex items-center justify-between gap-4 py-3 px-4 sm:px-6 rounded-3xl bg-white/70 dark:bg-[#121622]/80 backdrop-blur-xl border border-neutral-200/80 dark:border-white/10 shadow-sm transition-all duration-300">
        
        {/* Left / Start: Brand & Availability Status */}
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-bento-lavender to-bento-pink flex items-center justify-center text-white shadow-md shadow-bento-lavender/30"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white">
              {t('hero.name')}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t('hero.status')}
            </span>
          </div>
        </div>

        {/* Center: Navigation Shortcuts */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/60 dark:border-white/5 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
          <a
            href="#bento-grid"
            className="px-3 py-1 rounded-full hover:text-bento-lavender dark:hover:text-white transition-colors"
          >
            {t('nav.portfolio')}
          </a>
          <a
            href="#skills"
            className="px-3 py-1 rounded-full hover:text-bento-lavender dark:hover:text-white transition-colors"
          >
            {t('nav.skills')}
          </a>
          <a
            href="#projects"
            className="px-3 py-1 rounded-full hover:text-bento-lavender dark:hover:text-white transition-colors"
          >
            {t('nav.projects')}
          </a>
        </div>

        {/* Right / End: Controls (Lang, Theme, Email CTA) */}
        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <ThemeToggle />
          
          <button
            onClick={handleContactClick}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-bento-charcoal hover:bg-neutral-800 dark:bg-bento-lavender dark:hover:bg-indigo-500 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t('nav.contact')}</span>
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
