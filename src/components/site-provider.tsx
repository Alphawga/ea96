'use client'

import { SiteContext } from '@/lib/site-context'
import { SITE_CONFIGS } from '@/app/sites/config'
import { type ReactNode } from 'react'

export function SiteProvider({ 
  children, 
  siteId 
}: { 
  children: ReactNode
  siteId: keyof typeof SITE_CONFIGS
}) {
  return (
    <SiteContext.Provider value={{ 
      siteId, 
      config: SITE_CONFIGS[siteId] 
    }}>
      {children}
    </SiteContext.Provider>
  )
} 