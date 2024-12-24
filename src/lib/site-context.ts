'use client'

import { SITE_CONFIGS } from '@/app/sites/config'
import { createContext, useContext } from 'react'

interface SiteContextType {
  siteId: string
  config: typeof SITE_CONFIGS[keyof typeof SITE_CONFIGS]
}

export const SiteContext = createContext<SiteContextType | null>(null)

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) throw new Error('useSite must be used within SiteProvider')
  return context
} 