import { type ReactNode } from "react"

import { MotionDiv } from "@/lib/framer"

interface TemplateProps {
  children: ReactNode
}

export default function Template({ children }: TemplateProps) {
  return (
    <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </MotionDiv>
  )
}
