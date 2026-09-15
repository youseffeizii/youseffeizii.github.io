import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const StatCard = ({
  number,
  label,
  colorScheme = 'mint', // 'mint' | 'violet' | 'amber'
  delay = 0,
}) => {
  // Theme color maps for light and dark modes
  const colorStyles = {
    mint: {
      card: 'bg-[#9FE3DB] dark:bg-[#123630] text-neutral-900 dark:text-emerald-100 border-transparent dark:border-emerald-500/20',
      arrowBg: 'bg-white/40 dark:bg-emerald-950/50 text-neutral-900 dark:text-white',
      number: 'text-neutral-900 dark:text-emerald-50',
      label: 'text-neutral-700 dark:text-emerald-300/80',
    },
    violet: {
      card: 'bg-[#8C79C8] dark:bg-[#281B3F] text-white border-transparent dark:border-purple-500/20',
      arrowBg: 'bg-white/25 dark:bg-purple-950/50 text-white',
      number: 'text-white',
      label: 'text-white/80 dark:text-purple-200/80',
    },
    amber: {
      card: 'bg-[#F5BF62] dark:bg-[#3D2E14] text-neutral-900 dark:text-amber-100 border-transparent dark:border-amber-500/20',
      arrowBg: 'bg-black/15 dark:bg-amber-950/50 text-neutral-900 dark:text-white',
      number: 'text-neutral-900 dark:text-amber-50',
      label: 'text-neutral-800 dark:text-amber-200/90',
    }
  };

  const selected = colorStyles[colorScheme] || colorStyles.mint;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] shadow-bento dark:shadow-bento-dark border transition-all duration-300 group select-none ${selected.card}`}
    >
      {/* Top Right: Corner Mark Icon ⌝ */}
      <div className="flex justify-end">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:rotate-45 transition-transform duration-300 ${selected.arrowBg}`}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Metric Content */}
      <div className="mt-4">
        <span className={`text-4xl sm:text-5xl font-black tracking-tight leading-none ${selected.number}`}>
          {number}
        </span>
        <h4 className={`text-sm sm:text-base font-semibold mt-1 tracking-tight ${selected.label}`}>
          {label}
        </h4>
      </div>
    </motion.div>
  );
};

export default StatCard;
