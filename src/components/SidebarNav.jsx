import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

export const SidebarNav = () => {
  const { t, activeTab, setActiveTab } = useApp();

  const navItems = [
    { id: 'clients', label: t('nav.clients'), target: '#clients' },
    { id: 'skills', label: t('nav.skills'), target: '#skills' },
    { id: 'portfolio', label: t('nav.portfolio'), target: '#bento-grid' },
    { id: 'projects', label: t('nav.projects'), target: '#projects' },
  ];

  return (
    <aside className="hidden lg:flex flex-col items-center justify-center gap-6 py-6 px-2 text-xs font-semibold text-neutral-400 dark:text-neutral-500 select-none">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <a
            key={item.id}
            href={item.target}
            onClick={() => setActiveTab(item.id)}
            className={`group relative flex items-center justify-center py-2 transition-all duration-200 cursor-pointer ${
              isActive
                ? 'text-neutral-900 dark:text-white font-bold'
                : 'hover:text-neutral-700 dark:hover:text-neutral-300'
            }`}
          >
            {/* Vertical text label */}
            <span
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
              className="tracking-wider text-[11px] transition-transform group-hover:-translate-x-0.5"
            >
              {item.label}
            </span>

            {/* Active Indicator dot */}
            {isActive && (
              <motion.span
                layoutId="sidebar-active-dot"
                className="absolute -right-2 w-1.5 h-1.5 rounded-full bg-bento-lavender shadow-sm"
              />
            )}
          </a>
        );
      })}
    </aside>
  );
};

export default SidebarNav;
