import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AbstractArtCard = () => {
  const { t } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 rounded-[2.2rem] overflow-hidden shadow-bento dark:shadow-bento-dark border border-neutral-200/50 dark:border-white/10"
    >
      {/* Left Half: Deep Black Container with 3D Twisted Ribbon Sphere */}
      <div className="relative flex items-center justify-center p-6 bg-black dark:bg-[#0D1017] min-h-[190px] overflow-hidden group">
        {/* Subtle background gradient radial glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-transparent to-pink-950/20 pointer-events-none" />

        {/* 3D Ribbon Twisted Sphere Graphic */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center"
        >
          {/* SVG 3D Abstract Spiral Sphere inspired by reference image */}
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[0_10px_20px_rgba(100,140,255,0.3)]">
            <defs>
              <linearGradient id="spiralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="50%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#F472B6" />
              </linearGradient>
              <linearGradient id="spiralGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDA4AF" />
                <stop offset="60%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>

            {/* Concentric overlapping twisted contours */}
            <circle cx="80" cy="80" r="62" fill="none" stroke="url(#spiralGrad1)" strokeWidth="8" strokeDasharray="320" opacity="0.9" />
            <path
              d="M30 80 Q55 30 80 80 T130 80"
              fill="none"
              stroke="url(#spiralGrad2)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M80 30 Q130 55 80 80 T80 130"
              fill="none"
              stroke="url(#spiralGrad1)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <ellipse
              cx="80"
              cy="80"
              rx="46"
              ry="26"
              transform="rotate(35 80 80)"
              fill="none"
              stroke="url(#spiralGrad2)"
              strokeWidth="8"
            />
            <ellipse
              cx="80"
              cy="80"
              rx="46"
              ry="26"
              transform="rotate(-40 80 80)"
              fill="none"
              stroke="url(#spiralGrad1)"
              strokeWidth="7"
            />
            <circle cx="80" cy="80" r="14" fill="#E0E7FF" opacity="0.85" />
          </svg>
        </motion.div>
      </div>

      {/* Right Half: Warm Amber 172 Global Design Awards Card */}
      <div className="relative flex flex-col justify-between p-6 sm:p-7 bg-[#F5BF62] dark:bg-[#3D2E14] text-neutral-900 dark:text-amber-100 group select-none min-h-[190px]">
        {/* Top Right: Corner Mark Icon ⌝ */}
        <div className="flex justify-end">
          <div className="w-7 h-7 rounded-full bg-black/15 dark:bg-amber-950/60 flex items-center justify-center text-neutral-900 dark:text-white group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-4">
          <span className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-neutral-900 dark:text-amber-50">
            {t('bento.globalAwardsCount')}
          </span>
          <h4 className="text-sm sm:text-base font-bold mt-1 text-neutral-900 dark:text-amber-200">
            {t('bento.globalAwardsLabel')}
          </h4>
          <p className="text-[11px] text-neutral-800/80 dark:text-amber-300/80 mt-1 max-w-[200px] leading-tight">
            {t('bento.globalAwardsDesc')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AbstractArtCard;
