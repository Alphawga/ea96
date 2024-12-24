'use client'

import { BaseLayout } from "@/components/layouts/base-layout"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_CONFIGS } from "./sites/config"

export default function Home() {
  return (
    <ThemeProvider theme={SITE_CONFIGS.site1.theme}>
      <BaseLayout>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
      </BaseLayout>
    </ThemeProvider>
  )
}

