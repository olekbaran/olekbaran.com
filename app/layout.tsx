import { unstable_noStore as noStore } from "next/cache"
import { Syne } from "next/font/google"

import "@/styles/globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  noStore()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={syne.variable} suppressHydrationWarning>
        <div className="relative flex min-h-[100dvh] flex-col">{children}</div>
      </body>
    </html>
  )
}
