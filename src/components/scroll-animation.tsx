'use client'

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const directionVariants = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 }
}

export function ScrollAnimation({ 
  children, 
  className,
  delay = 0,
  direction = 'up',
  ...props 
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directionVariants[direction]
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        damping: 20
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
} 