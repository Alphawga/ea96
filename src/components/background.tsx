'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useSite } from "@/lib/site-context"

type BackgroundVariant = 'pattern' | 'gradient' | 'image' | 'mesh' | 'dots'
type PatternType = 'dots' | 'grid' | 'waves' | 'topography'

interface BackgroundProps {
  variant?: BackgroundVariant
  pattern?: PatternType
  image?: string
  overlay?: boolean
  overlayOpacity?: number
  animate?: boolean
  className?: string
  gradientFrom?: string
  gradientTo?: string
}

const patterns = {
  dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
  grid: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z'/%3E%3C/g%3E%3C/svg%3E")`,
  waves: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
  topography: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23000' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
}

export function Background({
  variant,
  pattern = 'dots',
  image,
  overlay = true,
  overlayOpacity = 0.5,
  animate = true,
  className,
  gradientFrom = 'from-primary',
  gradientTo = 'to-secondary'
}: BackgroundProps) {
  const { config } = useSite()
  const themeBackground = config.theme.background

  // Use theme background if no variant is provided
  if (!variant && themeBackground) {
    return (
      <div className={cn("fixed inset-0 z-[-1] opacity-10", className)} >
        {themeBackground.type === 'image' && (
          <>
            <Image
              src={themeBackground.src}
              alt={themeBackground.alt}
              fill
              className="object-cover"
              priority
            />
            {themeBackground.overlay && (
              <div 
                className="absolute inset-0 bg-black" 
                style={{ opacity: themeBackground.overlayOpacity ?? 0.5 }}
              />
            )}
          </>
        )}
        {themeBackground.type === 'video' && (
          <>
            <video
              src={themeBackground.src}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
      </div>
    )
  }

  const renderBackground = () => {
    switch (variant) {
      case 'pattern':
        return (
          <motion.div
            initial={animate ? { opacity: 0 } : undefined}
            animate={animate ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: patterns[pattern],
              backgroundSize: pattern === 'dots' ? '20px 20px' : '40px 40px'
            }}
          />
        )

      case 'gradient':
        return (
          <motion.div
            initial={animate ? { opacity: 0 } : undefined}
            animate={animate ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5 }}
            className={cn(
              "absolute inset-0 z-0 bg-gradient-to-br",
              gradientFrom,
              gradientTo
            )}
          />
        )

      case 'mesh':
        return (
          <motion.div
            initial={animate ? { opacity: 0 } : undefined}
            animate={animate ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
                radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)`
            }}
          />
        )

      case 'dots':
        return (
          <motion.div
            initial={animate ? { opacity: 0 } : undefined}
            animate={animate ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute h-full w-full">
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-gray-500/10"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: Math.random() * 2,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )

      case 'image':
        return image ? (
          <>
            <Image
              src={image}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            {overlay && (
              <div 
                className="absolute inset-0 bg-black" 
                style={{ opacity: overlayOpacity }}
              />
            )}
          </>
        ) : null
    }
  }

  return (
    <div className={cn("fixed inset-0 z-[-1]", className)}>
      {renderBackground()}
    </div>
  )
} 