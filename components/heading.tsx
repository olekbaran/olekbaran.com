import { Typography } from "./typography"

interface HeadingProps {
  title: string
  subtitle?: string
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="flex max-w-4xl flex-col gap-5">
      <Typography variant="h4">{title}</Typography>
      {subtitle && (
        <Typography variant="subtitle2" className="text-gray">
          {subtitle}
        </Typography>
      )}
    </div>
  )
}
