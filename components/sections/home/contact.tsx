"use client"

import { useInView } from "react-intersection-observer"

import { siteConfig } from "@/config/site"
import { ContactCard } from "@/components/cards/contact-card"
import { Heading } from "@/components/typography/heading"
import { useNavStore } from "@/stores/nav-store"

export function Contact() {
  const { setIsContactSectionActive, setIsContactSectionInactive } =
    useNavStore((state) => state)

  const { ref } = useInView({
    threshold: 0.69,
    onChange: (inView) => {
      if (inView) {
        setIsContactSectionActive()
      } else {
        setIsContactSectionInactive()
      }
    },
  })

  return (
    <section
      ref={ref}
      id="contact"
      className="container flex flex-col gap-16 py-16 md:py-32"
    >
      <Heading
        title="Contact"
        subtitle="Let's create something amazing together. You can get in touch with me using the options below."
      />
      <ul className="flex flex-col items-center gap-10 md:flex-row">
        <li className="w-full">
          <ContactCard label="LinkedIn" link={siteConfig.links.linkedIn} />
        </li>
        <li className="w-full">
          <ContactCard label="Email" link={`mailto:${siteConfig.email}`} />
        </li>
      </ul>
    </section>
  )
}
