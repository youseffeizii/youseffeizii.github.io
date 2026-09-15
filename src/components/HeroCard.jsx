import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Sparkles, Calendar, GraduationCap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroCard = () => {
  const { t, isRtl } = useApp();
  const [copied, setCopied] = useState(false);

  const email = t('hero.email');

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] bg-bento-lavender dark:bg-[#1E2238] dark:border dark:border-indigo-500/20 text-white p-7 sm:p-8 shadow-bento dark:shadow-bento-dark min-h-[480px] md:min-h-[540px] transition-all duration-300 hover:shadow-glow-lavender/30 group"
    >
      {/* Background glow decoration */}
      <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-white/10 dark:bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-bento-pink/20 blur-2xl pointer-events-none" />

      {/* Top Section: Avatar with Concentric Halo Rings */}
      <div className="relative flex items-center justify-center pt-2 pb-5">
        <div className="relative flex items-center justify-center">
          
          {/* Outer Glowing Ring */}
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-bento-pink via-white to-indigo-200 opacity-90 blur-[1px] animate-pulse-subtle" />

          {/* Inner Accent Ring (Magenta/Pink Halo from Reference) */}
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-[5px] bg-gradient-to-b from-[#ED5199] to-[#D83685] shadow-glow-pink">
            
            {/* White separator ring */}
            <div className="w-full h-full rounded-full p-1 bg-white dark:bg-[#1E2238] overflow-hidden">
              
              {/* Portrait Image Container with Vibrant Magenta Background from Reference */}
              <div className="w-full h-full rounded-full overflow-hidden bg-[#ED5199] relative group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <img
                  src="./assets/avatar.png"
                  alt="Yousef Feizi — Software Engineer"
                  className="w-full h-full object-cover object-[center_12%] contrast-125 brightness-105"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: 'grayscale(100%) contrast(130%)'
                  }}
                  onError={(e) => {
                    // Fallback to absolute or public path if needed
                    if (!e.target.src.includes('public/')) {
                      e.target.src = './public/assets/avatar.png';
                    }
                  }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section: Name, Role, Info & Circular Stamp */}
      <div className="relative z-10 flex items-end justify-between gap-3 mt-auto">
        
        {/* Left: Greeting & Typography */}
        <div className="flex flex-col">
          
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl sm:text-2xl font-medium tracking-tight text-white/90">
              {t('hero.greeting')}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold text-white/90">
              <GraduationCap className="w-3 h-3" />
              {t('hero.birthInfo')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t('hero.name')}
          </h2>

          <p className="text-xs sm:text-sm font-semibold text-white/90 mt-1 max-w-[220px] sm:max-w-[250px] leading-snug">
            {t('hero.role')}
          </p>

          {/* Interactive Email Chip with dashed line & copy feedback */}
          <div className="mt-4 pt-3 border-t border-white/20 border-dashed">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 hover:bg-black/35 backdrop-blur-md border border-white/25 text-xs text-white transition-all duration-200 group/btn"
              title="Click to copy email or send message"
            >
              <Mail className="w-3.5 h-3.5 text-white/80 group-hover/btn:text-white" />
              <span className="font-mono text-[11px] sm:text-xs tracking-tight">{email}</span>
              
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="flex items-center gap-1 text-[10px] text-emerald-300 font-semibold ml-1"
                  >
                    <Check className="w-3 h-3" />
                  </motion.span>
                ) : (
                  <span className="text-[10px] text-white/60 ml-1 group-hover/btn:text-white/90">
                    ↗
                  </span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Right: Spinning Vinyl / Design Portfolio Circular Badge */}
        <div className="relative flex-shrink-0 mb-1">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            
            {/* Spinning Text Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <defs>
                  <path
                    id="badgeCirclePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[8.5px] font-bold tracking-[0.18em] uppercase">
                  <textPath href="#badgeCirclePath" startOffset="0%">
                    {t('hero.badgeText')}
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Vinyl Record Center with year */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 border border-white/30 flex flex-col items-center justify-center text-white shadow-inner relative z-10">
              <span className="text-[8.5px] font-extrabold tracking-wider text-white">
                {t('hero.badgeCenter')}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-0.5" />
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroCard;
