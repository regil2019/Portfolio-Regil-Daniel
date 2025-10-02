import type { Content, Language } from '../types';
import { content as en } from '../content/en';
import { content as pt } from '../content/pt';
import { content as ru } from '../content/ru';

export const content: Record<Language, Content> = {
  en,
  pt,
  ru,
};

export const getContent = (lang: Language): Content => {
  return content[lang] ?? content.en;
};
