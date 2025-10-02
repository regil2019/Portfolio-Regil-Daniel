export type Language = 'pt' | 'en' | 'ru';

export type NavContent = {
  home: string;
  about: string;
  projects: string;
  skills: string;
  contact: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  paragrath: string;
  viewWork: string;
  downloadCV: string;
  image: string;
};

export type AboutContent = {
  title: string;
  description: string;
  journey: string;
  journeyText: string;
  sections: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
};

export type Project = {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  code: string;
  image: string;
};

export type ProjectsContent = {
  title: string;
  subtitle: string;
  filterAll: string;
  projects: Project[];
};

export type Skill = {
  name: string;
  percentage: number;
};

export type SkillsContent = {
  title: string;
  subtitle: string;
  frontend: string;
  tools: string;
  backend: string;
  skills: Skill[];
};

export type ContactContent = {
  title: string;
  subtitle: string;
  infoTitle: string;
  infoText: string;
  email: string;
  phone: string;
  location: string;
  whatsapp: string;
  chatWithMe: string;
  formTitle: string;
  name: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  successMessage: string;
  errorMessage: string;
};

export type FooterContent = {
  copyright: string;
};

export type Content = {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  projects: ProjectsContent;
  skills: SkillsContent;
  contact: ContactContent;
  footer: FooterContent;
};