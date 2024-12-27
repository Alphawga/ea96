'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSite } from '@/lib/site-context'
import { ThemeSwitcher } from "@/components/theme-switcher"



export function SiteHeader() {
  const { config } = useSite()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-extrabold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/40 transition-colors">{config.name}</span>
        </Link>
        <nav className="flex items-center space-x-6">
          {config.navigation.primary.map((item) => (
            <Link 
              key={item.href}
              href={`${config.basePath}${item.href}`}
              className="text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
          <ThemeSwitcher />
          <Button className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}

