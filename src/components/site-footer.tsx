import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="GrammarKoach" className="h-8 w-8" />
              <span className="font-bold">Expert document review</span>
            </Link>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Expert document review services for legal, financial, and corporate needs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">ABOUT US</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">MAISON DU FLEUR SUPPLIES LIMITED</h3>
            <p className="text-muted-foreground">
              If you need help using our service, or have a question about it, please feel free to contact us.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

