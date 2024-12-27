import { ThemeProvider } from "next-themes"

export default function Site5Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
   
        {children}

    </ThemeProvider>
  )
} 