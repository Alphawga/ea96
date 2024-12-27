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
        image?: {
            src: string
            alt: string
          }
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
  badge?: string
  image?: {
    src: string
    alt: string
  }
  
  media?: {
    background_type: 'image' | 'video' | 'pattern'
    image?: {
      src: string
      alt: string
      overlay?: boolean
      overlayOpacity?: number
    }
    video?: {
      src: string
      poster?: string
      muted?: boolean
      loop?: boolean
      autoPlay?: boolean
    }
    pattern?: {
      type: 'dots' | 'grid' | 'waves'
      color?: string
      opacity?: number
    }
  }
  animation?: {
    title?: 'fade' | 'slide' | 'typing'
    content?: 'fade' | 'slide' | 'stagger'
    duration?: number
  }
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
  features?: Array<{
    icon: string
    title: string
    description: string
  }>
} 