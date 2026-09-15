import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, Layout, Cpu, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { userSkills } from '../data/projects';

export const SkillsSection = () => {
  const { t } = useApp();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layout className="w-4 h-4 text-sky-400" />;
      case 'Backend':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'CMS':
        return <Globe className="w-4 h-4 text-purple-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-amber-400" />;
      default:
        return <Code2 className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-[2.5rem] bg-white dark:bg-[#111522] border border-neutral-200/90 dark:border-white/10 p-6 sm:p-10 shadow-bento dark:shadow-bento-dark transition-colors duration-300">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-200/60 dark:border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bento-lavender/10 text-bento-lavender text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('skillsSection.badge')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-900 dark:text-white">
              {t('skillsSection.title')}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 max-w-xl">
              {t('skillsSection.subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
            <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5">
              30 Years Old • 9 Aban 1374
            </span>
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 pt-8">
          {userSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-[#161B28] border border-neutral-200/70 dark:border-white/5 hover:border-bento-lavender/50 dark:hover:border-indigo-500/30 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="p-2 rounded-xl bg-white dark:bg-white/5 shadow-xs border border-neutral-200/50 dark:border-white/5 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(skill.category)}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 dark:text-neutral-500">
                  {skill.category}
                </span>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                  {skill.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                    {skill.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
