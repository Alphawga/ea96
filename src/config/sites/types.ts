import { ThemeConfig } from "@/lib/theme-config"

export interface SiteConfig {
  id: string
  name: string
  description: string
  basePath: string
  theme: ThemeConfig
  sections: {
    hero: HeroContent
    features: {
      title: string
      description: string
      items: Array<{
        title: string
        description: string
        icon: 'ClipboardCheck' | 'Clock' | 'Search'
        number: string
      }>
    }
    pricing: {
      title: string
      description: string
      plans: Array<{
        name: string
        price: string
        description: string
        features: string[]
        popular?: boolean
      }>
    }
    faq: Array<{
      question: string
      answer: string
    }>
  }
  navigation: {
    primary: NavigationItem[]
    footer?: {
      main: NavigationItem[]
      legal: NavigationItem[]
    }
  }
}

export interface NavigationItem {
  name: string
  href: string
}

export interface HeroContent {
  title: string
  subtitle: string
  cta: {
    primary: {
      text: string
      href: string
    }
    secondary?: {
      text: string
      href: string
    }
  }
} 