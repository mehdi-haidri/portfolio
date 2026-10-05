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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 animate-on-scroll relative inline-block animate-text-3d">
          About
        </h2>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-1">
              Software Engineer passionate about AI and AI-powered products, with a strong interest in developer tools,
              data platforms, and cloud-native systems. Fast learner who adapts quickly to new technologies and works
              across Java, Python, React, Spring Boot, microservices, Kubernetes, OCI, and cloud platforms.
            </p>
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-2">
              I enjoy turning complex requirements into reliable full-stack solutions and contributing effectively in
              collaborative, fast-paced teams.
            </p>
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-3">
              Je suis étudiant en <span className="font-medium text-primary">Génie Informatique</span> à l’ENSAH —
              École Nationale des Sciences Appliquées d’Al Hoceima, où je développe une solide base en conception
              logicielle et en technologies web modernes.
            </p>
            <p className="text-pretty animate-on-scroll animate-on-scroll-delay-3">
              <span className="font-medium text-primary">ENSAH · Al Hoceima</span> — Formation en Génie Informatique, de septembre 2021 à juillet 2026.
            </p>
          </div>

          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="mb-6 text-xl font-medium text-foreground">Certifications</h3>
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
