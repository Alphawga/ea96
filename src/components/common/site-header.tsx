'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon } from 'lucide-react'
import { useSite } from '@/lib/site-context'
import Image from "next/image"

interface NavigationItem {
  name: string
  href: string
}

export function SiteHeader() {
  const { config } = useSite()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="GrammarKoach" width={32} height={32} />
          <span className="font-bold">GRAMMARKOACH</span>
        </Link>
        <nav className="flex items-center space-x-6">
          {config.navigation.primary.map((item: NavigationItem) => (
            <Link 
              key={item.href}
              href={`${config.basePath}${item.href}`}
              className="text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="ghost" size="icon" className="mr-2">
            <MoonIcon className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}

