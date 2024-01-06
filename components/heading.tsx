import { Typography } from "./typography"

interface HeadingProps {
  title: string
  subtitle?: string
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="flex max-w-4xl flex-col gap-5">
      <Typography variant="h4" asChild>
        <h3>{title}</h3>
      </Typography>
      {subtitle && (
        <Typography variant="subtitle2" className="text-gray" asChild>
          <h4>{subtitle}</h4>
        </Typography>
      )}
    </div>
  )
}
