import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, ArrowUpRight, Maximize2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ShowcaseCard = () => {
  const { t, setShowDemoModal } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowDemoModal(true)}
      className="relative col-span-1 md:col-span-2 overflow-hidden rounded-[2.2rem] bg-[#A2D9D2] dark:bg-[#132B2B] shadow-bento dark:shadow-bento-dark min-h-[260px] sm:min-h-[290px] cursor-pointer group select-none border border-transparent dark:border-emerald-500/20"
    >
      {/* Background artwork: High-tech Web & E-Commerce Showcase */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80"
          alt="Showcase Artwork"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 contrast-105"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />

        {/* Gradient Overlay for high contrast & elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent dark:from-black/85 dark:via-black/40" />
      </div>

      {/* Top Right: Corner Mark icon from Reference Image ⌝ */}
      <div className="absolute top-5 right-5 z-20">
        <div className="w-8 h-8 rounded-full bg-white/30 dark:bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/40 dark:border-white/10 group-hover:rotate-45 transition-transform duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Center: Frosted Glass Play Button */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: isHovered ? 1.12 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/70 dark:bg-white/20 backdrop-blur-xl border border-white/60 dark:border-white/30 shadow-2xl group-hover:shadow-glow-pink/50 transition-shadow duration-300"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20 pointer-events-none" />
          <Play className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-900 dark:text-white fill-neutral-900 dark:fill-white ml-1 transition-transform" />
        </motion.div>
      </div>

      {/* Bottom Info bar */}
      <div className="absolute bottom-5 left-6 right-6 z-20 flex items-end justify-between">
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-pink-300 drop-shadow">
            <Sparkles className="w-3 h-3" />
            {t('bento.showcaseTag')}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md mt-0.5">
            {t('bento.showcaseTitle')}
          </h3>
          <p className="hidden sm:block text-xs text-white/85 max-w-sm mt-0.5 line-clamp-1 drop-shadow">
            {t('bento.showcaseDesc')}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 dark:bg-black/50 backdrop-blur-md text-[11px] font-semibold text-white border border-white/30">
          <Maximize2 className="w-3 h-3" />
          <span>{t('bento.playPreview')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowcaseCard;
