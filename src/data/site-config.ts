export type SiteConfig = {
  name: string
  description: string
  logo: {
    light: string
    dark: string
  }
  social: {
    twitter?: string
    github?: string
    linkedin?: string
  }
  navigation: {
    primary: Array<{
      name: string
      href: string
    }>
  }
} 