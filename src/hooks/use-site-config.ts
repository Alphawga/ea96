import { useParams } from 'next/navigation'
import { siteConfigs, type SiteId } from '@/config/sites'

export function useSiteConfig() {
  const params = useParams()
  const siteId = (params?.siteId as SiteId) || 'site1'
  
  return {
    siteId,
    config: siteConfigs[siteId],
  }
} 