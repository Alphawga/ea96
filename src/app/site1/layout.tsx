import { SiteProvider } from "@/components/site-provider"
import { ThemeProvider } from "next-themes"
import { Background } from "@/components/background"

export default function Site1Layout({
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
      <SiteProvider siteId="site1">
        <Background className="dark:opacity-20"  />
        {children}
      </SiteProvider>
    </ThemeProvider>
  )
} 