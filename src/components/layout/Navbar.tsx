import { FaGlobe, FaGithub, FaLinkedin, FaBars, FaTimes, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import type { Language, NavContent } from '@/types';

interface NavbarProps {
  content: NavContent;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLanguage, setLanguage, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu on window resize if greater than md breakpoint
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            onClick={() => setLanguage(currentLanguage === 'en' ? 'pt' : currentLanguage === 'pt' ? 'ru' : 'en')}
            aria-label="Switch Language"
          >
            <FaGlobe />
          </button>
         
          <span className="text-2xl font-bold text-indigo-400">Regil Daniel</span>
        </div>
        {/* Hamburger menu button for small screens */}
        <button
          className="text-gray-400 hover:text-indigo-400 transition duration-300 ease-in-out text-2xl md:hidden bg-black/30 backdrop-blur-sm rounded-md p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Menu for medium and larger screens */}
        <ul className={`md:flex gap-8 items-center font-medium text-gray-200 ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-black/90 backdrop-blur border-b border-gray-800 md:static md:bg-transparent md:backdrop-blur-0 md:border-0' : 'hidden'}`}>
          <li><a href="#home" className="block px-4 py-2 hover:text-indigo-400 transition">Home</a></li>
          <li><a href="#about" className="block px-4 py-2 hover:text-indigo-400 transition">About</a></li>
          <li><a href="#projects" className="block px-4 py-2 hover:text-indigo-400 transition">Projects</a></li>
          <li><a href="#skills" className="block px-4 py-2 hover:text-indigo-400 transition">Skills</a></li>
          <li><a href="#contact" className="block px-4 py-2 hover:text-indigo-400 transition">Contact</a></li>
          {/* Botão de dark mode visível apenas no mobile */}
          <li className="flex md:hidden justify-center mt-2">
            <button
              className="text-gray-400 hover:text-indigo-400 transition text-xl"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
        <div className="hidden md:flex gap-4 items-center">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          {/* Social Icons */}
          <a
            href="https://github.com/regil2019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/regil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition text-xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;




