'use client'

import { SiteConfig } from '@/config/sites/types'
import { createContext, useContext } from 'react'

interface SiteContextType {
  siteId: string
  config: SiteConfig
}

export const SiteContext = createContext<SiteContextType | null>(null)

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) throw new Error('useSite must be used within SiteProvider')
  return context
} 