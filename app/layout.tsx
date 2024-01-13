import { type ReactNode } from "react"
import { Syne } from "next/font/google"

import "@/styles/globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={syne.variable} suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
