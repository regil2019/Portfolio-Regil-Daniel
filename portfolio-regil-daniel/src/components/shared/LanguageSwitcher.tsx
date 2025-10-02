import React from 'react';
import type { Language } from '@/types';

type LanguageSwitcherProps = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  lightMode?: boolean;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, setLanguage, lightMode = false }) => {
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'PT', flag: '🇵🇹' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'ru', label: 'RU', flag: '🇷🇺' },
  ];

  return (
    <div className="flex space-x-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-md transition-colors flex items-center text-sm font-medium ${
            currentLanguage === lang.code
              ? 'bg-blue-600 text-white'
              : lightMode
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
