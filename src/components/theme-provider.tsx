'use client'

import { createContext, useContext } from 'react'
import type { ThemeConfig } from '@/lib/theme-config'

const ThemeContext = createContext<ThemeConfig | null>(null)

export function ThemeProvider({ 
  children, 
  theme 
}: { 
  children: React.ReactNode
  theme: ThemeConfig 
}) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const theme = useContext(ThemeContext)
  if (!theme) throw new Error('useTheme must be used within ThemeProvider')
  return theme
} 