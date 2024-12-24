import { site1Config } from './site1.config'
import { site2Config } from './site2.config'
import type { SiteConfig } from './types'

export const siteConfigs = {
  site1: site1Config,
  site2: site2Config,
} as const

export type SiteId = keyof typeof siteConfigs

export function getSiteConfig(siteId: SiteId): SiteConfig {
  return siteConfigs[siteId]
} 