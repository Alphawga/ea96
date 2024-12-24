import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface BaseLayoutProps {
  children: React.ReactNode
  headerVariant?: 'default' | 'transparent' | 'colored'
  footerVariant?: 'default' | 'minimal' | 'expanded'
}

export function BaseLayout({ 
  children, 
}: BaseLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
} 