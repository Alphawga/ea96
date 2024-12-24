interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient' | 'custom'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
}

export function SectionContainer({
  children,
  className,
  background = 'white',
  spacing = 'md'
}: SectionContainerProps) {
  const spacingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24'
  }

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50',
    custom: ''
  }

  return (
    <section className={`
      ${spacingClasses[spacing]}
      ${backgroundClasses[background]}
      ${className}
    `}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
} 