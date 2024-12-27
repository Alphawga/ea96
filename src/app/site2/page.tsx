import Hero from "@/components/site2/hero"
import Stats from "@/components/site2/stats"
import Features from "@/components/site2/features"
import Services from "@/components/site2/services"
import Pricing from "@/components/site2/pricing"
import Footer from "@/components/site2/footer"
import Header from "@/components/site2/header"

export default function Site2Page() {
  return (
    
    <main className="min-h-screen">
    <Header />
    <Hero    />
    <Stats />
    <Features />
    <Services />
    <Pricing />
    <Footer />
  </main>

  )
}
