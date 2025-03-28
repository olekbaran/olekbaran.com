import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { routes } from "@/config/routes"
import { cn } from "@/lib/utils"

import { Link } from "../nav/link"
import { Typography } from "../typography/typography"
import { DuctTape } from "./duct-tape"

interface DuctTapeContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function DuctTapeContent({ className, ...props }: DuctTapeContentProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-5 px-5 py-2 md:gap-10 lg:justify-between lg:px-10",
        className
      )}
      {...props}
    >
      <ArrowRightIcon className="h-6 w-6 stroke-[1.5px] md:h-14 md:w-14" />
      <Typography
        variant="h4"
        className="truncate font-extrabold uppercase leading-none"
      >
        Get in touch
      </Typography>
      <ArrowLeftIcon className="h-6 w-6 stroke-[1.5px] md:h-14 md:w-14" />
    </div>
  )
}

function GetInTouch() {
  return (
    <div className="relative overflow-hidden py-[5vw] md:py-[3vw]">
      <Link
        href={routes.contact.pathname}
        className="anti-aliasing absolute bottom-auto h-11 w-full rotate-3 scale-110 transform-gpu border border-gray md:h-[5.5rem] md:scale-105"
        aria-hidden
      >
        <DuctTape>
          <DuctTapeContent className="ml-40" />
          <DuctTapeContent className="ml-40" aria-hidden />
          <DuctTapeContent className="ml-40" aria-hidden />
          <DuctTapeContent className="ml-40" aria-hidden />
        </DuctTape>
      </Link>
      <Link
        href={routes.contact.pathname}
        className="anti-aliasing h-[2.875rem] w-full -rotate-3 scale-110 transform-gpu border border-gray md:h-[5.625rem] md:scale-105"
      >
        <DuctTape>
          <DuctTapeContent />
          <DuctTapeContent aria-hidden />
          <DuctTapeContent aria-hidden />
          <DuctTapeContent aria-hidden />
        </DuctTape>
      </Link>
    </div>
  )
}

export { GetInTouch, DuctTapeContent }
