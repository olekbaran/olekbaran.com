import { Typography } from "@/components/typography/typography"

interface ErrorProps {
  name: string
  message: string
}

export function Error({ name, message }: ErrorProps) {
  return (
    <section className="container flex min-h-dvh flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <Typography variant="h4">{name}</Typography>
        <Typography
          variant="subtitle2"
          className="hyphens-auto break-all text-center text-gray"
        >
          {message}
        </Typography>
      </div>
    </section>
  )
}
