export type ThemeConfig = {
  colors: {
    primary: string
    secondary: string
    accent: string
  }
  fonts: {
    heading: string
    body: string
  }
  borderRadius: string
  spacing: Record<string, string>
  background?: {
      type: 'image' | 'video' | 'pattern'
      src: string
      alt: string
      overlay?: boolean
      overlayOpacity?: number
  }
} 