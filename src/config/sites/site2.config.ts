import { SiteConfig } from './types'

export const site2Config: SiteConfig = {
  id: 'site2',
  name: 'Site Two',
  description: 'Another amazing platform',
  basePath: '/site2',
  theme: {
    colors: {
      primary: '#2563EB',
      secondary: '#059669',
      accent: '#D97706',
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
      title: 'Welcome to Site Two',
      subtitle: 'Another Amazing Platform',
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
  }
} 