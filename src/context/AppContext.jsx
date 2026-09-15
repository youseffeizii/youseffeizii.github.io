import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state: defaults to 'dark' as requested
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved ? saved : 'dark';
  });

  // Language state: 'en' or 'fa'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved ? saved : 'en';
  });

  // Active vertical tab in Bento layout
  const [activeTab, setActiveTab] = useState('portfolio');

  // Active project for live preview modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Active showcase video / interactive demo modal
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Synchronize theme with <html> class & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Synchronize language with <html> dir, lang, & localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');
    localStorage.setItem('portfolio_lang', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fa' : 'en'));
  };

  // Helper translation accessor
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage,
        toggleLanguage,
        isRtl: language === 'fa',
        t,
        activeTab,
        setActiveTab,
        selectedProject,
        setSelectedProject,
        showDemoModal,
        setShowDemoModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
