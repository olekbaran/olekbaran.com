import { Syne } from "next/font/google"
import { draftMode } from "next/headers"

import { VisualEditing } from "@/components/studio/visual-editing"

import "@/styles/globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={syne.variable} suppressHydrationWarning>
        <div className="relative flex min-h-[100dvh] flex-col">
          {children}
          {draftMode().isEnabled && <VisualEditing />}
        </div>
      </body>
    </html>
  )
}
