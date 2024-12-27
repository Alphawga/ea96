'use client'

import { motion } from "framer-motion"

interface BackgroundPatternProps {
  type?: 'dots' | 'grid' | 'waves'
  color?: string
  opacity?: number
}

const patterns = {
  dots: `circle at 1px 1px`,
  grid: `repeating-linear-gradient(0deg, currentColor, currentColor 1px, transparent 1px, transparent 20px)`,
  waves: `radial-gradient(circle at 100%, currentColor 10%, transparent 10%)`
}

export function BackgroundPattern({ 
  type = 'dots',
  color = 'currentColor',
  opacity = 0.1
}: BackgroundPatternProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${patterns[type]}, ${color} 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  )
} 