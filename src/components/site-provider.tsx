'use client'

import { SiteContext } from '@/lib/site-context'
import { siteConfigs, type SiteId } from '@/config/sites'

interface SiteProviderProps {
  children: React.ReactNode
  siteId: SiteId
}

export function SiteProvider({ children, siteId }: SiteProviderProps) {
  return (
    <SiteContext.Provider 
      value={{
        siteId,
        config: siteConfigs[siteId]
      }}
    >
      {children}
    </SiteContext.Provider>
  )
} 