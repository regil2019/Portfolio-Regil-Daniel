import type { Content } from '@/types';

export const content: Content = {
  nav: {
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    skills: "Навыки",
    contact: "Контакты"
  },
  hero: {
    title: "Привет, я",
    subtitle: " Регил",
    paragrath: "Инженер-программист, увлеченный созданием потрясающих цифровых решений и инновационных продуктов, которые меняют мир. Магистр программной инженерии, в настоящее время изучаю Full Stack-разработку и ИИ-агентов",
    viewWork: "Посмотреть Мои Работы",
    downloadCV: "Скачать Резюме",
    image: "/image/regil.png"
  },
  about: {
    title: "Обо мне",
    description: "Я увлеченный инженер-программист с магистерской степенью в области инженерии программного обеспечения и более 2 лет опыта создания инновационных цифровых решений. В настоящее время изучаю курс Full Stack Open и Next.js, с планами углубиться в AI Agents и SaaS платформы.",
    journey: "Мое путешествие",
    journeyText: "Я начал свою карьеру как фронтенд-разработчик и развился до full-stack, работая над сложными проектами, которые позволили мне профессионально расти. В настоящее время я занимаюсь продвинутыми исследованиями в области AI Agents, SaaS платформ и современных веб-технологий. Сегодня я объединяю технические навыки с бизнес-видением для создания решений, которые положительно влияют на пользователей.",
    sections: [
      {
        title: "Full-Stack разработка",
        description: "Полный опыт во фронтенде и бэкенде, создание надежных и масштабируемых приложений.",
        icon: "FaCode"
      },
      {
        title: "Дизайн и UX",
        description: "Фокус на создании интуитивно понятных интерфейсов и исключительного пользовательского опыта.",
        icon: "FaPalette"
      },
      {
        title: "Производительность",
        description: "Постоянная оптимизация для обеспечения быстрых и эффективных приложений.",
        icon: "FaRocket"
      },
      {
        title: "Сотрудничество",
        description: "Командная работа и эффективная коммуникация для достижения качественных результатов.",
        icon: "FaUsers"
      }
    ]
  },
  projects: {
    title: "Мои проекты",
    subtitle: "Вот некоторые из проектов, которые я разработал, демонстрируя свои навыки и страсть к программированию.",
    filterAll: "Все",
    projects: [
      {
        category: "ИИ",
        title: "Платформа SaaS с ИИ",
        description: "Продвинутая SaaS платформа с AI агентами, построенная с использованием Next.js 15, React и Better Auth. Функции включают автоматизированные рабочие процессы, интеллектуальные чат-боты и аналитику в реальном времени.",
        technologies: ["Next.js 15", "React", "Better Auth", "Polar", "AI Agents"],
        demo: "Демо",
        code: "Код",
        image: '/image/ai-saas-bg.jpg',
      },
      {
        category: "ИИ",
        title: "Интеллектуальная система чат-ботов",
        description: "Многоязычная система чат-ботов с ответами на основе ИИ и интеграцией с различными платформами обмена сообщениями. Разработана во время моих исследований AI агентов.",
        technologies: ["Node.js", "OpenAI API", "WebSockets", "MongoDB"],
        demo: "Демо",
        code: "Код",
        image: '/image/chatbot-bg.jpg',
      },
      {
        category: "Веб",
        title: "Современный E-commerce",
        description: "Полноценная платформа электронной коммерции с React, Node.js и PostgreSQL. Включает систему оплаты, управление продуктами и административную панель.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
        demo: "Демо",
        code: "Код",
        image: '/image/'
      }
    ]
  },
  skills: {
    title: "Мои навыки",
    subtitle: "Технологии и инструменты, которыми я владею и использую для создания эффективных и современных решений.",
    frontend: "Фронтенд",
    tools: "Инструменты",
    backend: "Бэкенд",
    skills: [
      { name: "React", percentage: 95 },
      { name: "Next.js", percentage: 85 },
      { name: "Git", percentage: 95 },
      { name: "AWS", percentage: 75 },
      { name: "TypeScript", percentage: 90 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "Vue.js", percentage: 85 },
      { name: "Docker", percentage: 85 },
      { name: "Node.js", percentage: 80 },
      { name: "Python", percentage: 75 },
      { name: "PostgreSQL", percentage: 70 },
      { name: "MongoDB", percentage: 67 }
    ]
  },
  contact: {
    title: "Связаться со мной",
    subtitle: "Заинтересованы в сотрудничестве? Давайте обсудим ваш следующий проект и как я могу помочь вам достичь ваших целей.",
    infoTitle: "Контактная информация",
    infoText: "Я всегда открыт для обсуждения рабочих возможностей, интересных проектов или просто обмена идеями о технологиях и ИИ.",
    email: "Электронная почта",
    phone: "Телефон",
    location: "Местоположение",
    whatsapp: "WhatsApp",
    chatWithMe: "Связаться со мной",
    formTitle: "Отправить сообщение",
    name: "Имя *",
    namePlaceholder: "ФИО",
    emailPlaceholder: "ваш@email.com",
    subject: "Тема *",
    subjectPlaceholder: "Тема сообщения",
    message: "Сообщение *",
    messagePlaceholder: "Расскажите больше о вашем проекте или о том, как я могу помочь...",
    send: "Отправить сообщение",
    successMessage: "Сообщение успешно отправлено!",
    errorMessage: "Пожалуйста, заполните все поля.",
  },

  footer: {
    copyright: "Портфолио Regil. Все права защищены."
  },
};
