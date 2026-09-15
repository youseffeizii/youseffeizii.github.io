import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useApp();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-200/70 dark:bg-white/10 backdrop-blur-md border border-neutral-300/60 dark:border-white/10 text-xs font-semibold shadow-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-2.5 py-1 rounded-full transition-colors duration-200 ${
          language === 'en'
            ? 'text-white'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="lang-active-pill"
            className="absolute inset-0 rounded-full bg-bento-lavender shadow-sm"
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>

      <button
        onClick={() => setLanguage('fa')}
        className={`relative px-2.5 py-1 rounded-full font-persian transition-colors duration-200 ${
          language === 'fa'
            ? 'text-white'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
        }`}
      >
        {language === 'fa' && (
          <motion.div
            layoutId="lang-active-pill"
            className="absolute inset-0 rounded-full bg-bento-lavender shadow-sm"
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          />
        )}
        <span className="relative z-10">فا</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
