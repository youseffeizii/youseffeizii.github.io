import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Globe, Github } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProjectModal = () => {
  const {
    selectedProject,
    setSelectedProject,
    showDemoModal,
    setShowDemoModal,
    language,
    t,
  } = useApp();

  const isOpen = Boolean(selectedProject || showDemoModal);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setShowDemoModal(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setSelectedProject, setShowDemoModal]);

  const handleClose = () => {
    setSelectedProject(null);
    setShowDemoModal(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#151924] border border-neutral-200 dark:border-white/10 shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label={t('modal.close')}
              className="absolute top-5 right-5 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all duration-200 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content: If ShowDemoModal is open */}
            {showDemoModal ? (
              <div className="flex flex-col">
                <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80"
                    alt="Papercraft Flamingo Showcase Demo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs font-mono uppercase tracking-widest text-pink-400">
                      WebGL & Paper Origami Simulation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black mt-1">
                      {t('bento.flamingoTitle')}
                    </h2>
                  </div>
                </div>

                <div className="p-7 sm:p-8 flex flex-col gap-6">
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {t('bento.flamingoDesc')}
                  </p>
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200 dark:border-white/10">
                    <button
                      onClick={handleClose}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-800 dark:text-white transition-colors"
                    >
                      {t('modal.close')}
                    </button>
                  </div>
                </div>
              </div>
            ) : selectedProject ? (
              /* Content: If SelectedProject is open */
              <div className="flex flex-col">
                {/* Project Screenshot Banner */}
                <div className="relative aspect-[16/9] w-full bg-neutral-950 overflow-hidden">
                  <img
                    src={`https://api.microlink.io?url=${encodeURIComponent(
                      selectedProject.liveUrl
                    )}&screenshot=true&meta=false&embed=screenshot.url`}
                    alt={selectedProject.title[language] || selectedProject.title.en}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent flex items-end p-6 sm:p-8">
                    <div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-bento-lavender uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        {selectedProject.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {selectedProject.title[language] || selectedProject.title.en}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex flex-col gap-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      {t('modal.overview')}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed">
                      {selectedProject.description[language] || selectedProject.description.en}
                    </p>
                  </div>

                  {/* Highlights */}
                  {selectedProject.highlights && (
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5">
                        {t('modal.features')}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {(
                          selectedProject.highlights[language] ||
                          selectedProject.highlights.en
                        ).map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      {t('modal.techStack')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-xl text-xs font-medium bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Controls */}
                  <div className="flex items-center justify-between gap-4 pt-5 border-t border-neutral-200 dark:border-white/10">
                    <button
                      onClick={handleClose}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {t('modal.close')}
                    </button>

                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-bento-lavender hover:bg-indigo-500 shadow-md shadow-bento-lavender/30 transition-all duration-200"
                    >
                      <span>{t('modal.openLive')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
