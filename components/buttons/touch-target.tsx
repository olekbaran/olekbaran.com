interface TouchTargetProps {
  children: React.ReactNode
}

export function TouchTarget({ children }: TouchTargetProps) {
  return (
    <>
      {children}
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
      />
    </>
  )
}
