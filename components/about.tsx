"use client"

import { useEffect, useRef } from "react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 animate-on-scroll relative inline-block animate-text-3d">
          About
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-pretty animate-on-scroll animate-on-scroll-delay-1">
            I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
            design with robust engineering. My favorite work lies at the intersection of design and development,
            creating experiences that not only look great but are meticulously built for performance and usability.
          </p>
          <p className="text-pretty animate-on-scroll animate-on-scroll-delay-2">
            Je suis étudiant en <span className="font-medium text-primary">Génie Informatique</span> à l’ENSAH — École Nationale des Sciences Appliquées d’Al Hoceima, où je développe une solide base en conception logicielle et en technologies web modernes.
          </p>
          <p className="text-pretty animate-on-scroll animate-on-scroll-delay-3">
            <span className="font-medium text-primary">ENSAH · Al Hoceima</span> — Formation en Génie Informatique, de septembre 2021 à juillet 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
