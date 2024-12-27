import Hero from "@/components/site3/hero"
import Header from "@/components/site3/header"
import Services from "@/components/site3/services"
import Benefits from "@/components/site3/benefits"
import Pricing from "@/components/site3/pricing"
import Integration from "@/components/site3/integration"
import Footer from "@/components/site3/footer"
import { SiteProvider } from "@/components/site-provider"

export default function Site3Page() {
  return (
    <SiteProvider siteId="site3">
      <main className="bg-white">
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <Pricing />
        <Integration />
        <Footer />
      </main>
    </SiteProvider>
  )
} 