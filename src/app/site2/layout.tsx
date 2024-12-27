import { SiteProvider } from "@/components/site-provider"
import { ThemeProvider } from "next-themes"

export default function Site2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <SiteProvider siteId="site2">
       
        {children}
      </SiteProvider>
    </ThemeProvider>
  )
} 