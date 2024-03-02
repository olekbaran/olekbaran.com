import { env } from "@/env"

export const revalidateTime = 60 * 60 * 24 * 365 // 1 year

export const siteConfig = {
  name: "Olek Baran",
  description:
    "I'm a front-end developer passionate about building dynamic and user-friendly web applications.",
  url: env.NEXT_PUBLIC_APP_URL,
  email: "olekbaran24@gmail.com",
  links: {
    github: "https://github.com/olekbaran",
    linkedIn: "https://www.linkedin.com/in/aleksanderbaran",
    instagram: "https://www.instagram.com/olekbaran_",
  },
}
