import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import SidebarNav from './SidebarNav';
import HeroCard from './HeroCard';
import ShowcaseCard from './ShowcaseCard';
import StatCard from './StatCard';
import ClientsCard from './ClientsCard';
import AbstractArtCard from './AbstractArtCard';

export const BentoGrid = () => {
  const { t, isRtl } = useApp();

  return (
    <section id="bento-grid" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Outer Bento Canvas Container inspired by reference image */}
      <div className="relative rounded-[2.8rem] sm:rounded-[3.5rem] bg-white dark:bg-[#111522] border border-neutral-200/90 dark:border-white/10 p-5 sm:p-8 lg:p-10 shadow-bento dark:shadow-bento-dark transition-colors duration-300">
        
        {/* Top Header Row of Bento: "About Me" on left & Giant "Portfolio" headline on right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 sm:pb-8">
          
          {/* Left: "About Me" Chip from reference image */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-bento-lavender" />
            <span>{t('nav.aboutMe')}</span>
          </div>

          {/* Right: Giant "Portfolio" headline with corner mark ⌝ from reference image */}
          <div className="flex items-baseline gap-2 select-none">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-white uppercase leading-none">
              {t('bento.portfolioTitle')}
            </h1>
            <span className="text-2xl sm:text-4xl font-light text-neutral-400 dark:text-neutral-500 leading-none">
              ⌝
            </span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column (Span 5 on Desktop): Vertical Sidebar + HeroCard */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            {/* Vertical Sidebar Navigation */}
            <SidebarNav />

            {/* Profile Hero Card */}
            <div className="flex-1">
              <HeroCard />
            </div>
          </div>

          {/* Right Column (Span 7 on Desktop): Project Showcase, Stats, Clients & 3D Art */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5 sm:gap-6">
            
            {/* Top Row: Showcase Card + Stacked Mint & Violet Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Wide Flamingo Papercraft Showcase Card (Span 2) */}
              <ShowcaseCard />

              {/* Stacked Mint & Violet Stats Cards (Span 1) */}
              <div className="flex flex-col gap-4 sm:gap-5 justify-between">
                <StatCard
                  number={t('bento.projectsCount')}
                  label={t('bento.projectsLabel')}
                  colorScheme="mint"
                  delay={0.15}
                />
                <StatCard
                  number={t('bento.skillsCount')}
                  label={t('bento.skillsLabel')}
                  colorScheme="violet"
                  delay={0.2}
                />
              </div>

            </div>

            {/* Bottom Row: Charcoal Clients Card + Combined 3D Art & Amber Awards Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Clients Card with Apple Logo (Span 1) */}
              <div className="sm:col-span-1">
                <ClientsCard />
              </div>

              {/* Split 3D Art + Amber 172 Awards Card (Span 2) */}
              <div className="sm:col-span-2">
                <AbstractArtCard />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BentoGrid;
