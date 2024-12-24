import { BaseLayout } from "@/components/layouts/base-layout"

import { HeroSection } from "@/components/hero-section"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteProvider } from "@/components/site-provider"
import { site1Config } from "@/config/sites/site1.config"

export default function Site1() {
  return (
    <SiteProvider siteId="site1">
      <ThemeProvider theme={site1Config.theme}>
        <BaseLayout 
          headerVariant="transparent"
          footerVariant="default"
        >
          <HeroSection />
          {/* Other sections */}
        </BaseLayout>
      </ThemeProvider>
    </SiteProvider>
  )
} 