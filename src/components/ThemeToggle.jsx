import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme, t } = useApp();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
      className="relative flex items-center justify-center p-2 rounded-full transition-all duration-300 bg-neutral-200/70 hover:bg-neutral-300/80 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-200 shadow-sm backdrop-blur-md border border-neutral-300/60 dark:border-white/10 group focus:outline-none focus:ring-2 focus:ring-bento-lavender"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-5 h-5 flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 group-hover:text-amber-600 transition-colors" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
