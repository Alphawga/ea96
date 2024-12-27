'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { site1Config } from "@/config/sites/site1.config"

export default function Home() {
  return (
    <ThemeProvider theme={site1Config.theme}>
   <p> Landing Page</p>
    </ThemeProvider>
  )
}

