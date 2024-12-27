import { SiteHeader } from "@/components/common/site-header"
import { SiteFooter } from "@/components/common/site-footer"

interface BaseLayoutProps {
  children: React.ReactNode
  headerVariant?: 'default' | 'transparent' | 'colored'
  footerVariant?: 'default' | 'minimal' | 'expanded'
}

export function BaseLayout({ 
  children,
}: BaseLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-screen-2xl">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
} 