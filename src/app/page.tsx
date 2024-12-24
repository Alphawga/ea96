'use client'

import { BaseLayout } from "@/components/layouts/base-layout"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { ThemeProvider } from "@/components/theme-provider"
import { site1Config } from "@/config/sites/site1.config"

export default function Home() {
  return (
    <ThemeProvider theme={site1Config.theme}>
      <BaseLayout>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
      </BaseLayout>
    </ThemeProvider>
  )
}

