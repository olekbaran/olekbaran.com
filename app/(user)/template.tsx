"use client"

import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { useLocomotiveScroll } from "@/hooks/use-locomotive-scroll"

interface TemplateProps {
  children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname()
  useLocomotiveScroll()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
