export const SITE_CONFIGS = {
  site1: {
    name: "Site One",
    basePath: '/site1',
    theme: {
      colors: {
        primary: "#0070f3",
        secondary: "#00ff00",
        accent: "#ff0000"
      },
      fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif"
      },
      borderRadius: "0.5rem",
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem"
      },
    },
    sections: {
        hero: {
            title: 'Welcome to Site One',
            subtitle: 'This is a subtitle for the hero section',
            cta: {
                primary: {
                    text: 'Get Started',
                    href: '/get-started'
                }
            }
        },
        features: true,
        pricing: true,
        faq: true
      },
      navigation: {
        primary: [
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Pricing", href: "/pricing" },
          { name: "FAQ", href: "/faq" }
        ]
      }
  },
  site2: {
    name: "Site Two",
    basePath: '/site2',
    theme: {
      colors: {
        primary: "#0070f3",
        secondary: "#00ff00",
        accent: "#ff0000"
      },
      fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif"
      },
      borderRadius: "0.5rem",
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem"
      }
    },
    sections: {
      hero: {
        title: 'Welcome to Site Two',
        subtitle: 'This is a subtitle for the hero section',
        cta: {
            primary: {
                text: 'Get Started',
                href: '/get-started'
            }
        }
      },
      features: true,
      pricing: true,
      faq: true
    },
    navigation: {
      primary: [
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "FAQ", href: "/faq" }
      ]
    }
  }
} as const 