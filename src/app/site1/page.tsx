import { BaseLayout } from "@/components/layouts/base-layout"
import { SITE_CONFIGS } from "../sites/config"
import { HeroSection } from "@/components/hero-section"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteProvider } from "@/components/site-provider"

export default function Site1() {
  return (
    <SiteProvider siteId="site1">
      <ThemeProvider theme={SITE_CONFIGS.site1.theme}>
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