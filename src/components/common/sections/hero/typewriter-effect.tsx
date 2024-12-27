'use client'

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
  speed?: number
}

export function TypewriterEffect({ 
  text, 
  delay = 0,
  speed = 50 
}: TypewriterEffectProps) {
  const controls = useAnimation()
  
  useEffect(() => {
    const animate = async () => {
      await controls.start({
        width: "100%",
        transition: {
          duration: text.length * speed * 0.001,
          ease: "linear",
          delay
        }
      })
    }
    
    animate()
  }, [text, controls, delay, speed])

  return (
    <div className="relative z-20">
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        className="overflow-hidden "
      >
        <div className="text-4xl sm:text-6xl font-bold tracking-tight">{text}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: text.length * speed * 0.001 + delay }}
        className="absolute right-0 top-0 w-[2px] h-full bg-current"
      />
    </div>
  )
} 