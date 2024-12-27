'use client'

import { Button } from "@/components/ui/button"
import type { HeroContent } from "@/config/sites/types"
import { useSite } from "@/lib/site-context"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { BackgroundPattern } from "./background-pattern"
import { ScrollAnimation } from "@/components/scroll-animation"

type HeroVariant = 'default' | 'split' | 'center' | 'minimal' | 'video'

interface HeroSectionProps {
  variant?: HeroVariant
}

export function HeroSection({ variant = 'default' }: HeroSectionProps) {
  const { config } = useSite()
  const content = config.sections.hero as HeroContent

  const variants: Record<HeroVariant, string> = {
    default: "bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden",
    split: "bg-white dark:bg-slate-900 overflow-hidden",
    center: "bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden",
    minimal: "bg-white dark:bg-black overflow-hidden",
    video: "relative overflow-hidden"
  }

  const renderBackground = () => {
    if (!content.media) return null

    switch (content.media.background_type) {
      case 'video':
        return (
          <div className="absolute inset-0 w-full h-full">
            <video
              src={content.media.video?.src}
              poster={content.media.video?.poster}
              autoPlay={content.media.video?.autoPlay ?? true}
              loop={content.media.video?.loop ?? true}
              muted={content.media.video?.muted ?? true}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )

      case 'pattern':
        return <BackgroundPattern {...content.media.pattern} />

      case 'image':
        return (
          <div className="absolute inset-0 w-full h-full z-10">
            <Image
              src={content.media.image?.src || ''}
              alt={content.media.image?.alt || ''}
              fill
              className="object-cover"
              priority
            />
            {content.media.image?.overlay && (
              <div 
                className="absolute inset-0 bg-black" 
                style={{ opacity: content.media.image.overlayOpacity ?? 0.5 }}
              />
            )}
          </div>
        )
    }
  }

  const renderCenteredHero = () => {
    return (
      <div className="relative isolate">
        {/* Gradient Background */}
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          {content.badge && (
            <ScrollAnimation>
              <div className="inline-flex items-center rounded-full px-6 py-2 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                {content.badge}
              </div>
            </ScrollAnimation>
          )}
          
          <ScrollAnimation delay={0.1}>
            <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">
              {content.title}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {content.subtitle}
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href={content.cta.primary.href}>{content.cta.primary.text}</a>
              </Button>
              {content.cta.secondary && (
                <Button variant="outline" size="lg" asChild>
                  <a href={content.cta.secondary.href}>{content.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </ScrollAnimation>

          {content.features && (
            <div className="mt-20 grid grid-cols-1 gap-y-16 sm:grid-cols-3 sm:gap-x-8">
              {content.features.map((feature, index) => (
                <ScrollAnimation 
                  key={feature.title}
                  delay={0.4 + (index * 0.1)}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="mt-6 text-base font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    )
  }

  const renderMinimalHero = () => {
    return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <ScrollAnimation direction="right">
            {content.badge && (
              <div className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-primary/10 text-primary">
                {content.badge}
              </div>
            )}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {content.subtitle}
            </p>
            <div className="mt-8 flex gap-x-4">
              <Button size="lg" asChild>
                <a href={content.cta.primary.href}>{content.cta.primary.text}</a>
              </Button>
              {content.cta.secondary && (
                <Button variant="ghost" size="lg" asChild>
                  <a href={content.cta.secondary.href}>{content.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </ScrollAnimation>
        </div>

        {content.image && (
          <ScrollAnimation direction="left" className="relative lg:mt-0">
            <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
            </div>
          </ScrollAnimation>
        )}
      </div>
    )
  }

  const renderDefaultHero = () => {
    return (
      <div className="relative z-20">
        <div className="mx-auto max-w-2xl text-center">
          {content.badge && (
            <ScrollAnimation>
              <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-white ring-1 ring-inset ring-white/20">
                {content.badge}
              </div>
            </ScrollAnimation>
          )}
          <ScrollAnimation delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {content.title}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-white/80">
              {content.subtitle}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <a href={content.cta.primary.href}>{content.cta.primary.text}</a>
              </Button>
              {content.cta.secondary && (
                <Button variant="outline" size="lg" className="text-white" asChild>
                  <a href={content.cta.secondary.href}>{content.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </ScrollAnimation>
          {content.features && (
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {content.features.map((feature, index) => (
                <ScrollAnimation 
                  key={feature.title}
                  delay={0.4 + (index * 0.1)}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{feature.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderSplitHero = () => {
    return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          {content.badge && (
            <ScrollAnimation>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                {content.badge}
              </div>
            </ScrollAnimation>
          )}
          <ScrollAnimation delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              {content.title}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">
              {content.subtitle}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            <div className="mt-8 flex gap-x-4">
              <Button size="lg" asChild>
                <a href={content.cta.primary.href}>{content.cta.primary.text}</a>
              </Button>
              {content.cta.secondary && (
                <Button variant="outline" size="lg" asChild>
                  <a href={content.cta.secondary.href}>{content.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </ScrollAnimation>
        </div>

        {content.image && (
          <ScrollAnimation direction="left" className="relative lg:mt-0">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent dark:from-black/20" />
            </div>
          </ScrollAnimation>
        )}
      </div>
    )
  }

  const renderVideoHero = () => {
    return (
      <div className="relative z-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          {content.badge && (
            <ScrollAnimation>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/10 ring-1 ring-inset ring-white/20">
                {content.badge}
              </div>
            </ScrollAnimation>
          )}
          <ScrollAnimation delay={0.1}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              {content.title}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="mt-6 text-lg text-white/80">
              {content.subtitle}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.3}>
            <div className="mt-10 flex justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <a href={content.cta.primary.href}>{content.cta.primary.text}</a>
              </Button>
              {content.cta.secondary && (
                <Button variant="outline" size="lg" className="text-white" asChild>
                  <a href={content.cta.secondary.href}>{content.cta.secondary.text}</a>
                </Button>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    )
  }

  const renderHeroContent = () => {
    switch (variant) {
      case 'default':
        return renderDefaultHero()
      case 'split':
        return renderSplitHero()
      case 'center':
        return renderCenteredHero()
      case 'minimal':
        return renderMinimalHero()
      case 'video':
        return renderVideoHero()
      default:
        return renderDefaultHero()
    }
  }

  return (
    <section className={cn("relative w-full min-h-[80vh] flex items-center", variants[variant])}>
      {renderBackground()}
      <div className="relative py-24 sm:py-32 w-full">
        <div className="container">
          {renderHeroContent()}
        </div>
      </div>
    </section>
  )
} 