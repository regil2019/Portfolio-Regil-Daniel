import type { Content } from '@/types'

export const content: Content = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    title: "Hello, I'm",
    subtitle: 'Regil.',
    paragrath: 'Software Engineer passionate about creating incredible digital experiences and innovative solutions that make a difference. Master in Software Engineering, currently studying Full Stack development and AI Agents.',
    viewWork: 'View My Work',
    downloadCV: 'Download CV',
    image: '/image/regil.png',
  },
  about: {
    title: 'About Me',
    description:
      "I'm a passionate Software Engineer with a Master's degree in Software Engineering and over 2 years of experience creating innovative digital solutions. Currently studying Full Stack Open course and Next.js, with plans to dive deep into AI Agents and SaaS platforms.",
    journey: 'My Journey',
    journeyText:
      'I started my career as a frontend developer and evolved to full-stack, working on challenging projects that allowed me to grow professionally. Currently pursuing advanced studies in AI Agents, SaaS platforms, and modern web technologies. Today, I combine technical skills with business vision to create solutions that positively impact users.',
    sections: [
      {
        title: 'Full-Stack Development',
        description:
          'Complete experience in frontend and backend, creating robust and scalable applications.',
        icon: 'FaCode',
      },
      {
        title: 'Design & UX',
        description:
          'Focus on creating intuitive interfaces and exceptional user experiences.',
        icon: 'FaPalette',
      },
      {
        title: 'Performance',
        description: 'Constant optimization to ensure fast and efficient applications.',
        icon: 'FaRocket',
      },
      {
        title: 'Collaboration',
        description: 'Teamwork and effective communication to deliver quality results.',
        icon: 'FaUsers',
      },
    ],
  },
  // filepath: c:\Users\Regil Daniel\Desktop\portfolio\portfolio-regil-daniel\src\content\en.ts
projects: {
  title: "Projects",
  subtitle: "My Projects",
  filterAll: "All",
  projects: [
    {
      category: 'AI',
      title: 'AI SaaS Platform',
      description: 'Advanced SaaS platform with AI agents built with Next.js 15, React, and Better Auth. Features include automated workflows, intelligent chatbots, and real-time analytics.',
      technologies: ['Next.js 15', 'React', 'Better Auth', 'Polar', 'AI Agents'],
      demo: 'Demo',
      code: 'Code',
      image: '/image/ai-saas-bg.jpg', // Caminho da imagem
    },
    {
      category: 'AI',
      title: 'Intelligent Chatbot System',
      description: 'Multi-language chatbot system with AI-powered responses and integration with various messaging platforms. Built during my AI agents studies.',
      technologies: ['Node.js', 'OpenAI API', 'WebSockets', 'MongoDB'],
      demo: 'Demo',
      code: 'Code',
      image: '/image/chatbot-bg.jpg',
    },
    {
      category: 'Web',
      title: 'Modern E-commerce',
      description: 'Complete e-commerce platform with React, Node.js and PostgreSQL. Includes payment system, product management and admin panel.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
      demo: 'Demo',
      code: 'Code',
      image: '/image/ecommerce-bg.jpg',
    },
  ],
},
  skills: {
    title: 'My Skills',
    subtitle:
      'Technologies and tools I master and use to create efficient and modern solutions.',
    frontend: 'Frontend',
    tools: 'Tools',
    backend: 'Backend',
    skills: [
      { name: 'React', percentage: 95 },
      { name: 'Next.js', percentage: 85 },
      { name: 'Git', percentage: 95 },
      { name: 'AWS', percentage: 75 },
      { name: 'TypeScript', percentage: 90 },
      { name: 'Tailwind CSS', percentage: 90 },
      { name: 'Vue.js', percentage: 85 },
      { name: 'Docker', percentage: 85 },
      { name: 'Node.js', percentage: 80 },
      { name: 'Python', percentage: 75 },
      { name: 'PostgreSQL', percentage: 70 },
      { name: 'MongoDB', percentage: 67 },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle:
      'Interested in working with me? Let’s talk about your next project and how I can help you achieve your goals.',
    infoTitle: 'Contact Information',
    infoText:
      'I’m always open to discussing work opportunities, interesting projects, or just exchanging ideas about technology and AI.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    whatsapp: 'WhatsApp',
    chatWithMe: 'Chat with me',
    formTitle: 'Send a Message',
    name: 'Name *',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'your@email.com',
    subject: 'Subject *',
    subjectPlaceholder: 'Message subject',
    message: 'Message *',
    messagePlaceholder: 'Tell me more about your project or how I can help you...',
    send: 'Send Message',
    successMessage: 'Message sent successfully!',
    errorMessage: 'Please fill in all fields.',
  },

  footer: {
    copyright: 'Regil Portfolio. All rights reserved.',
  },
}
