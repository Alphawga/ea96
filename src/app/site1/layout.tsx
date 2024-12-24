import { SiteProvider } from '@/components/site-provider'

export default function Site1Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SiteProvider siteId="site1">
      {children}
    </SiteProvider>
  )
} 