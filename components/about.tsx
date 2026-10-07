"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"

export function About() {
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
    <section ref={sectionRef} id="about" className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 animate-on-scroll">
          {t("about")}
        </h2>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-1">
              {t("aboutIntro")}
            </p>
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-2">
              {t("aboutCollaboration")}
            </p>
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-3">
              {t("education")}
            </p>
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-3">
              <span className="font-medium text-primary">{t("educationDetails").split(" — ")[0]}</span>
              {" — "}
              {t("educationDetails").split(" — ")[1]}
            </p>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="mb-6 text-xl font-medium text-foreground">{t("certifications")}</h3>
            <div className="space-y-4">
              {[
                ["Oracle Cloud Infrastructure 2024 Generative AI Certified Professional", "Oracle"],
                ["Developing AI Applications with Python and Flask", "IBM · Issued Sep 2024"],
                ["Network Technician Career Path", "Cisco"],
                ["Advanced Learning Algorithms", "Stanford Online"],
                ["Supervised Machine Learning: Regression and Classification", "Stanford Online"],
              ].map(([title, issuer]) => (
                <div key={title} className="rounded-lg border border-primary/15 bg-card/50 p-4 transition-colors hover:border-primary/40">
                  <p className="font-medium leading-snug text-foreground">{title}</p>
                  <p className="mt-2 text-sm text-primary">{issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
