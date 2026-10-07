"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="px-6 py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground animate-on-scroll">{t("getInTouch")}</h2>
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-balance animate-on-scroll animate-on-scroll-delay-1">
            {t("workTogether")}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-on-scroll animate-on-scroll-delay-2">
            {t("contactDescription")}
          </p>
          <div className="pt-4 animate-on-scroll animate-on-scroll-delay-3">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 cursor-target">
              <a href="mailto:mehdihaidri3@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                {t("sendEmail")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
