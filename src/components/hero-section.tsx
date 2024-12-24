'use client'

import { Button } from "@/components/ui/button"
import { useSite } from "@/lib/site-context"

interface HeroContent {
  title: string
  subtitle: string
  cta: {
    primary: {
      text: string
      href: string
    }
    secondary?: {
      text: string
      href: string
    }
  }
}

export function HeroSection() {
  const { config } = useSite()
  const content = config.sections.hero as unknown as HeroContent

  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {content.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href={content.cta.primary.href}>
                  {content.cta.primary.text}
                </a>
              </Button>
              {content.cta.secondary && (
                <Button variant="outline" size="lg" asChild>
                  <a href={content.cta.secondary.href}>
                    {content.cta.secondary.text}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

