import { SiteConfig } from "./types";

export const site3Config: SiteConfig = {
  id: 'site3',
  name: 'DocuReview',
  description: 'Enterprise-Grade Document Review Solutions',
  basePath: '/site3',
  theme: {
    colors: {
      primary: '#2563EB',
      secondary: '#0EA5E9',
      accent: '#6366F1',
    },
    fonts: {
      heading: 'Lexend',
      body: 'Inter',
    },
    borderRadius: '0.375rem',
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
    },

  },
  sections: {
    hero: {
      title: 'Elevate Your Content with AI-Powered Precision',
      subtitle: 'Transform your writing from good to exceptional with our advanced content enhancement platform',
      badge: '✨ AI-Enhanced Review',
      animation: {
        title: 'slide',
        content: 'stagger',
        duration: 0.7
      },
      cta: {
        primary: {
          text: 'Start Writing',
          href: '/start'
        },
        secondary: {
          text: 'View Demo',
          href: '#demo'
        }
      },
      features: [
        {
          icon: '🎯',
          title: 'Precision Review',
          description: 'Get detailed feedback on grammar, style, and tone'
        },
        {
          icon: '⚡',
          title: 'Instant Analysis',
          description: 'Receive feedback in seconds, not hours'
        },
        {
          icon: '🔄',
          title: 'Unlimited Revisions',
          description: 'Perfect your content with multiple passes'
        }
      ]
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