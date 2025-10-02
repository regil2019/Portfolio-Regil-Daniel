import type { Content } from '@/types'

export const content: Content = {
  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    skills: 'Skills',
    contact: 'Contato',
  },
  hero: {
    title: 'Olá, sou',
    subtitle: 'Regil',
    paragrath: 'Engenheiro de Software apaixonado por criar experiências digitais incríveis e soluções inovadoras que fazem a diferença. Mestre em Engenharia de Software, atualmente estudando Desenvolvimento Full Stack e Agentes de IA',
    viewWork: 'Ver Meu Trabalho',
    downloadCV: 'Baixar CV',
    image: '/image/regil.png',
  },
  about: {
    title: 'Sobre Mim',
    description:
      'Sou um Engenheiro de Software apaixonado, com mestrado em Engenharia de Software e mais de 2 anos de experiência criando soluções digitais inovadoras. Atualmente estudando o curso Full Stack Open e Next.js, com planos de aprofundar em Agentes de IA e plataformas SaaS.',
    journey: 'Minha Jornada',
    journeyText:
      'Comecei minha carreira como desenvolvedor frontend e evoluí para full-stack, trabalhando em projetos desafiadores que me permitiram crescer profissionalmente. Atualmente, busco estudos avançados em Agentes de IA, plataformas SaaS e tecnologias web modernas. Hoje, combino habilidades técnicas com visão de negócio para criar soluções que impactam positivamente os usuários.',
    sections: [
      {
        title: 'Desenvolvimento Full-Stack',
        description:
          'Experiência completa em frontend e backend, criando aplicações robustas e escaláveis.',
        icon: 'FaCode',
      },
      {
        title: 'Design & UX',
        description:
          'Foco em criar interfaces intuitivas e experiências excepcionais para o usuário.',
        icon: 'FaPalette',
      },
      {
        title: 'Performance',
        description:
          'Otimização constante para garantir aplicações rápidas e eficientes.',
        icon: 'FaRocket',
      },
      {
        title: 'Colaboração',
        description:
          'Trabalho em equipe e comunicação eficaz para entregar resultados de qualidade.',
        icon: 'FaUsers',
      },
    ],
  },
  projects: {
    title: 'Meus Projetos',
    subtitle:
      'Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades e paixão por programação.',
    filterAll: 'Todos',
    projects: [
      {
        category: 'IA',
        title: 'Plataforma SaaS de IA',
        description:
          'Plataforma SaaS avançada com agentes de IA construída com Next.js 15, React e Better Auth. Recursos incluem fluxos de trabalho automatizados, chatbots inteligentes e análises em tempo real.',
        technologies: ['Next.js 15', 'React', 'Better Auth', 'Polar', 'Agentes de IA'],
        demo: 'Demo',
        code: 'Código',
        image: '/image/ai-saas-bg.jpg',
      },
      {
        category: 'IA',
        title: 'Sistema de Chatbot Inteligente',
        description:
          'Sistema de chatbot multilíngue com respostas alimentadas por IA e integração com diversas plataformas de mensagens. Desenvolvido durante meus estudos de agentes de IA.',
        technologies: ['Node.js', 'OpenAI API', 'WebSockets', 'MongoDB'],
        demo: 'Demo',
        code: 'Código',
        image: '/image/chatbot-bg.jpg',
      },
      {
        category: 'Web',
        title: 'E-commerce Moderno',
        description:
          'Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Inclui sistema de pagamento, gerenciamento de produtos e painel administrativo.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
        demo: 'Demo',
        code: 'Código',
        image: '',
      },
    ],
  },
  skills: {
    title: 'Minhas Skills',
    subtitle:
      'Tecnologias e ferramentas que domino e uso para criar soluções eficientes e modernas.',
    frontend: 'Frontend',
    tools: 'Ferramentas',
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
    title: 'Entre em Contato',
    subtitle:
      'Interessado em trabalhar comigo? Vamos conversar sobre seu próximo projeto e como posso ajudar você a alcançar seus objetivos.',
    infoTitle: 'Informações de Contato',
    infoText:
      'Estou sempre aberto para discutir oportunidades de trabalho, projetos interessantes ou apenas trocar ideias sobre tecnologia e IA.',
    email: 'Email',
    phone: 'Telefone',
    location: 'Localização',
    whatsapp: 'WhatsApp',
    chatWithMe: 'Chat comigo',
    formTitle: 'Envie uma Mensagem',
    name: 'Nome *',
    namePlaceholder: 'Seu nome completo',
    emailPlaceholder: 'seu@email.com',
    subject: 'Assunto *',
    subjectPlaceholder: 'Assunto da mensagem',
    message: 'Mensagem *',
    messagePlaceholder: 'Conte mais sobre seu projeto ou como posso ajudar você...',
    send: 'Enviar Mensagem',
    successMessage: 'Mensagem enviada com sucesso!',
    errorMessage: 'Por favor, preencha todos os campos.',
  },

  footer: {
    copyright: 'Portfólio Regil. Todos os direitos reservados.',
  },
}
