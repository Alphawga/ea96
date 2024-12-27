export const site5Config = {
  id: 'site5',
  name: 'Refyne',
  description: 'Premium Content Refinement',
  basePath: '/site5',
  theme: {
    colors: {
      primary: '#18181B',
      secondary: '#27272A',
      accent: '#71717A',
    },
    fonts: {
      heading: 'Instrument Sans',
      body: 'Inter',
    },
    background: {
      type: 'image',
      src: '/minimal-bg.jpg',
      overlay: true,
      overlayOpacity: 0.95,
    }
  },
  sections: {
    hero: {
      variant: 'minimal',
      title: 'Refined Writing, Elevated Impact',
      subtitle: 'Transform your content with AI-powered document review and professional copywriting services.',
      badge: {
        text: 'New',
        description: 'AI-Powered Document Review →'
      },
      stats: [
        { value: '15k+', label: 'Documents Reviewed' },
        { value: '99%', label: 'Client Satisfaction' },
        { value: '24h', label: 'Average Turnaround' }
      ]
    },
    features: {
      title: 'Explore Writing Solutions',
      subtitle: 'Our Services',
      items: [
        {
          title: 'Smart Review',
          description: 'AI-powered document analysis for grammar, style, and clarity improvements.',
          icon: 'Brain',
          color: 'emerald'
        },
        {
          title: 'Content Creation',
          description: 'Professional copywriting services tailored to your brand voice and audience.',
          icon: 'FileText',
          color: 'orange'
        },
        {
          title: 'Real-time Collaboration',
          description: 'Seamless team collaboration with instant feedback and version control.',
          icon: 'MessageSquare',
          color: 'indigo'
        }
      ]
    },
    pricing: {
      title: 'Simple, transparent pricing',
      plans: [
        {
          name: 'Basic',
          price: '₦10,000',
          description: '500 Words',
          features: [
            '7 days turnaround',
            'Basic grammar check',
            'Style suggestions',
            'One revision round'
          ]
        },
        {
          name: 'Professional',
          price: '₦25,000',
          description: '2000 Words',
          features: [
            '48-hour turnaround',
            'Advanced grammar check',
            'Style & tone optimization',
            'Two revision rounds',
            'Plagiarism check'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '₦40,000',
          description: 'Custom Plan',
          features: [
            '24-hour turnaround',
            'Premium document review',
            'Unlimited revisions',
            'Dedicated editor',
            'Priority support'
          ]
        }
      ]
    }
  },
  navigation: {
    primary: [
      { name: 'About Us', href: '#' },
      { name: 'Features', href: '#features' },
      { name: 'Blog', href: '#blog' },
      { name: 'FAQ', href: '#faq' }
    ],
    footer: {
      product: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Updates', href: '#updates' }
      ],
      company: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press', href: '#press' }
      ],
      support: [
        { name: 'Help Center', href: '#help' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  }
} 