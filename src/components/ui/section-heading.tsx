interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center'
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
} 