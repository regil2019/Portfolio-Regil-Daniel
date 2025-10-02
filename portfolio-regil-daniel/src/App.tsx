import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';
import type { Language } from '@/types';
import { getContent } from '@/utils/i18n';
import { detectUserLanguage } from '@/utils/language';
/* Removed unused LanguageSwitcher import */
import type { Content } from '@/types';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [currentContent, setCurrentContent] = useState<Content | null>(null);
  const [isDetecting, setIsDetecting] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Wrapper to match Navbar setLanguage prop type (lang: Language) => void
  const setLanguageWrapper = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        const lang = await detectUserLanguage();
        setCurrentLanguage(lang);
      } catch {
        setCurrentLanguage('en');
      } finally {
        setIsDetecting(false);
      }
    };

    detectLanguage();
  }, []);

  useEffect(() => {
    const content = getContent(currentLanguage);
    if (content) {
      setCurrentContent(content);
    } else {
      setCurrentContent(null);
    }
  }, [currentLanguage]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  if (isDetecting || !currentContent) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">looking for your language...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        content={currentContent}
        currentLanguage={currentLanguage}
        url="https://your-portfolio-url.com"
      />
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        {/* Removed fixed dark mode toggle button to move it into Navbar */}
        {/* <div className="fixed top-4 right-4 flex items-center gap-2 z-50">
          <LanguageSwitcher currentLanguage={currentLanguage} setLanguage={setCurrentLanguage} />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div> */}

        <Navbar
          content={currentContent.nav}
          currentLanguage={currentLanguage}
          setLanguage={setLanguageWrapper}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <Hero content={currentContent.hero} />
        <About content={currentContent.about} />
        <Projects content={currentContent.projects} />
        <Skills content={currentContent.skills} />
        <Contact content={currentContent.contact} />
        <Footer content={currentContent.footer} />
      </div>
    </>
  );
}

export default App;
