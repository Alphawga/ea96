import { SiteConfig } from './types'

export const site1Config: SiteConfig = {
  id: 'site1',
  name: 'GrammarKoach',
  
  basePath: '/site1',
  theme: {
    colors: {
      primary: '#4F46E5',
      secondary: '#10B981',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
    borderRadius: '0.5rem',
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem'
    }
  },
  sections: {
    hero: {
      title: 'Welcome to GrammarKoach',
      subtitle: 'AI-Powered Grammar Learning Platform',
      cta: {
        primary: {
          text: 'Get Started',
          href: '/get-started'
        }
      }
    },
    features: {
      title: 'Features',
      description: 'Learn grammar with our AI-powered platform',
      items: []
    },
    pricing: {
      title: 'Pricing',
      description: 'Choose the plan that suits you',
      plans: []
    },
    faq: [
      {
        question: 'What is the best way to learn grammar?',
        answer: 'The best way to learn grammar is to practice regularly. Our platform provides a variety of exercises and quizzes to help you improve your grammar skills.'
      }
    ]
  },
  navigation: {
    primary: [
      { name: 'Home', href: '/' },
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'FAQ', href: '/faq' }
    ],
    footer: {
      main: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ],
      legal: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
      ],
    }
  },
  description: 'AI-Powered Grammar Learning Platform for everyone'
} 