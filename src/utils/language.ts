import type { Language } from '@/types';

const lusophoneCountries = ['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'TL', 'ST', 'GQ'];
const russianCountries = ['RU', 'BY', 'KZ', 'KG', 'TJ', 'TM', 'UZ'];

export const detectUserLanguage = async (): Promise<Language> => {
  try {
    // Em produção: usar API real como ipapi.co/json/
    const countryCode = 'PT'; // ← Testar com 'RU', 'US', etc.

    if (lusophoneCountries.includes(countryCode)) return 'pt';
    if (russianCountries.includes(countryCode)) return 'ru';
    return 'en';
  } catch {
    return detectBrowserLanguage();
  }
};

export const detectBrowserLanguage = (): Language => {
  const userLang = navigator.language;
  if (userLang.startsWith('pt')) return 'pt';
  if (userLang.startsWith('ru')) return 'ru';
  return 'en';
};
