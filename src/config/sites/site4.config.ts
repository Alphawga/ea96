

export const site4Config = {
  id: 'site4',
  name: 'WriteFlow',
  description: 'Creative Content Enhancement Studio',
  basePath: '/site4',
  theme: {
    colors: {
      primary: '#7C3AED',
      secondary: '#EC4899',
      accent: '#8B5CF6',
    },
    fonts: {
      heading: 'Plus Jakarta Sans',
      body: 'Plus Jakarta Sans',
    },

  },
  sections: {
    hero: {
      title: 'Get Your Documents Reviewed by Professionals',
      subtitle: 'Ensuring your documents meet the highest professional standards.',
      badge: 'AI-Powered Platform',
      image: {
        src: '/grammar-hero.png',
        alt: 'Hero background',
      },

      animation: {
        title: 'fade',
        content: 'fade',
        duration: 0.5
      },
      cta: {
        primary: {
          text: 'Get Started',
          href: '/#pricing'
        },
        secondary: {
          text: 'Learn More',
          href: '#features'
        }
      },
      features: [
        {
          icon: '🚀',
          title: 'Fast Turnaround',
          description: 'Get your documents reviewed within 24 hours',
        },
        {
          icon: '🤖',
          title: 'AI-Powered',
          description: 'Advanced AI technology for accurate reviews',

        },
        {
          icon: '👨‍🎓',
          title: 'Expert Review',
          description: 'Professional editors review your documents',

        }
      ]
    },
    features: {
      title: 'Features',
      description: 'Learn grammar with our AI-powered platform',
      items: [
        {
          title: 'Reliable Expertise',
          description: 'Expert review and feedback on your documents',
          icon: 'ClipboardCheck',
          number: '1',
          image: {
            src: '/grammar-reliable.png',
            alt: 'Hero background',
          }
        },
        {
          title: 'Time Efficiency',
          description: 'Quick turnaround times for all documents',
          icon: 'Clock',
          number: '2',
          image: {
            src: '/grammar-fast.png',
            alt: 'Hero background',
          }
        },
        {
          title: 'SEO Optimization',
          description: 'Ensure your content ranks well in search',
          icon: 'Search',
          number: '3',
          image: {
            src: '/grammar-seo.png',
            alt: 'Hero background',
          }
        }
      ]
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      description: 'Choose the plan that best fits your needs',
      plans: [
        {
          name: "Silver",
          price: "₦10,000",
          description: "500 Words",
          features: [
            "7 days turnaround",
            "Expert review and feedback",
            "No plagiarism checker",
          ],
          popular: true,
        },
        {
          name: "Diamond",
          price: "₦40,000",
          description: "Customized Plan",
          features: [
            "4 days turnaround",
            "Expert review and feedback",
            "Free plagiarism checker",
          ],
          popular: false,
        }
      ]
    },
    faq: [
      {
        question: "What types of documents do you review?",
        answer: "We review all types of documents including academic papers, business documents, and creative writing."
      },
      {
        question: "How fast can I get my document reviewed?",
        answer: "Depending on your plan, we offer turnaround times from 24 hours to 7 days."
      }
    ]
  },
  navigation: {
    primary: [
      { name: 'Home', href: '/#hero' },
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/#pricing' },
      { name: 'FAQ', href: '/#faq' }
    ],
    footer: {
      main: [
        { name: 'About', href: '/#about' },
        { name: 'Blog', href: '/#blog' },
        { name: 'Contact', href: '/#contact' },
      ],
      legal: [
        { name: 'Privacy', href: '/#privacy' },
        { name: 'Terms', href: '/#terms' },
      ],
    }
  }
} 