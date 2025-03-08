import { cn } from "@/lib/utils"

import { ParallaxHorizontal } from "../utils/parallax-horizontal"

interface DuctTapeProps extends React.HTMLAttributes<HTMLElement> {}

export function DuctTape({ className, children, ...props }: DuctTapeProps) {
  return (
    <div className={cn("w-full bg-black text-white", className)} {...props}>
      <ParallaxHorizontal>
        <div className="mx-10 flex items-center gap-20">{children}</div>
      </ParallaxHorizontal>
    </div>
  )
}
