"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { enableOverlays, HistoryAdapterNavigate } from "@sanity/overlays"
import { useLiveMode } from "@sanity/react-loader"

import { apiRoutes } from "@/config/routes"
import { client } from "@/sanity/lib/client"

const stegaClient = client.withConfig({ stega: true })

export function VisualEditing() {
  const router = useRouter()
  const routerRef = useRef(router)

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [navigate, setNavigate] = useState<HistoryAdapterNavigate | undefined>()

  useEffect(() => {
    routerRef.current = router
  }, [router])

  useEffect(() => {
    const disable = enableOverlays({
      history: {
        subscribe: (navigate) => {
          setNavigate(() => navigate)
          return () => setNavigate(undefined)
        },
        update: (update) => {
          switch (update.type) {
            case "push":
              return routerRef.current.push(update.url)
            case "pop":
              return routerRef.current.back()
            case "replace":
              return routerRef.current.replace(update.url)
            default:
              throw new Error(`Unknown update type: ${update.type}`)
          }
        },
      },
    })

    return () => disable()
  }, [])

  useEffect(() => {
    if (navigate) {
      navigate({
        type: "push",
        url: `${pathname}${searchParams?.size ? `?${searchParams}` : ""}`,
      })
    }
  }, [navigate, pathname, searchParams])

  useLiveMode({ client: stegaClient })

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "preview" && window === parent) {
      location.href = apiRoutes.disableDraft
    }
  }, [])

  return null
}
