import { SITE_CONFIGS } from "@/app/sites/config"



export const siteConfigs = {
  site1: SITE_CONFIGS.site1,
  site2: SITE_CONFIGS.site2,
} as const

export type SiteId = keyof typeof siteConfigs 