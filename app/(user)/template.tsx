"use client"

import { usePathname } from "next/navigation"
import { ProgressProvider } from "@bprogress/next/app"
import { motion } from "framer-motion"
import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "@/tailwind.config"

interface TemplateProps {
  children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname()

  const { theme } = resolveConfig(tailwindConfig)

  return (
    <ProgressProvider
      height="1px"
      color={theme.colors.white}
      options={{ showSpinner: false, easing: "ease" }}
      shallowRouting
    >
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    </ProgressProvider>
  )
}
