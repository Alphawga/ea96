'use client'

import Link from "next/link"
import { useSite } from '@/lib/site-context'


export function SiteFooter() {
  const { config } = useSite()
  
  return (
    <footer className="border-t bg-background">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-extrabold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/40 transition-colors">{config.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-muted-foreground">
              {config.description}
            </p>
          </div>
          {config.navigation.footer?.main && (
            <div>
              <h3 className="mb-4 text-sm font-semibold">ABOUT US</h3>
              <ul className="space-y-3">
                {config.navigation.footer.main.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={`${config.basePath}${item.href}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {config.navigation.footer?.legal && (
            <div>
              <h3 className="mb-4 text-sm font-semibold">LEGAL</h3>
              <ul className="space-y-3">
                {config.navigation.footer.legal.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={`${config.basePath}${item.href}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

