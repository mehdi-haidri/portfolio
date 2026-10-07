"use client"

import { Badge } from "@/components/ui/badge"
import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"

const experiences = [
  {
    period: "2026-04 — 2026-09",
    title: { en: "Full-Stack Developer Intern", fr: "Stagiaire Développeur Full-Stack" },
    company: "Oracle",
    description: {
      en: "Developed AIDP AgentHub and strengthened skills in Java and Python full-stack development, microservices-based platforms, Kubernetes, OCI, MLOps, and deployment across multiple environments. Worked within enterprise engineering workflows covering security, governance, secure data access, and platform service operations.",
      fr: "Développement de AIDP AgentHub et montée en compétences en développement full-stack Java et Python, plateformes basées sur des microservices, Kubernetes, OCI, MLOps et déploiement sur de multiples environnements. Travail au sein de flux d’ingénierie d’entreprise couvrant la sécurité, la gouvernance, l’accès sécurisé aux données et les opérations de services de plateforme.",
    },
    technologies: ["Java", "Python", "Microservices", "Kubernetes", "OCI", "MLOps"],
  },
  {
    period: "2025-07 — 2025-09",
    title: { en: "Full-Stack Developer Intern", fr: "Stagiaire Développeur Full-Stack" },
    company: "Marketing Confort · Fès, Maroc",
    description: {
      en: "Built experience with Spring Boot microservices, Next.js web development, React Native mobile development, and role-based access control with Keycloak.",
      fr: "Acquisition de compétences en microservices Spring Boot, développement web Next.js, développement mobile React Native et contrôle d’accès basé sur les rôles avec Keycloak.",
    },
    technologies: ["Spring Boot", "Next.js", "React Native", "Keycloak"],
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const { language, t } = useLanguage()

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
    <section ref={sectionRef} id="experience" className="px-6 py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 animate-on-scroll">{t("experience")}</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group animate-on-scroll" style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                <div className="md:col-span-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{exp.period}</p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {exp.title[language]} · {exp.company}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description[language]}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
