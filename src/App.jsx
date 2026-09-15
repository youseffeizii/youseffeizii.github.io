import React from 'react';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bento-bg dark:bg-bento-dark-bg text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* The Master Bento Grid (matching reference image) */}
        <BentoGrid />

        {/* Specialized Skills & Technologies Section */}
        <SkillsSection />

        {/* Dynamic Project Showcase with live screenshot previews & "View Live" */}
        <ProjectsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Preview & Demo Modal */}
      <ProjectModal />
    </div>
  );
};

export default App;
