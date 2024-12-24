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
} 