import { BaseLayout } from "@/components/layouts/base-layout"
import { HeroSection } from "@/components/common/sections/hero/hero-section"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteProvider } from "@/components/site-provider"
import { site1Config } from "@/config/sites/site1.config"
import { FeaturesSection } from "@/components/common/sections/features-section"
import { PricingSection } from "@/components/common/sections/pricing-section"
import { FaqSection } from "@/components/common/sections/faq-section"

export default function Site1() {
  return (
    <SiteProvider siteId="site1">
      <ThemeProvider theme={site1Config.theme}>
        <BaseLayout>
          <HeroSection variant="split" />
          <FeaturesSection />
          <PricingSection variant="cartoon3d" />
          <FaqSection />
        </BaseLayout>
      </ThemeProvider>
    </SiteProvider>
  )
} 