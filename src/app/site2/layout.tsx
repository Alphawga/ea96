import { SiteProvider } from "@/components/site-provider"

export default function Site2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteProvider siteId="site2">
      {children}
    </SiteProvider>
  )
} 