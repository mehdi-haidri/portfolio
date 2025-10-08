"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef } from "react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    url: "https://example.com",
    description:
      "Build and maintain critical components used across the entire platform. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web development.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Developer",
    company: "Startup Inc",
    url: "https://example.com",
    description:
      "Developed and shipped highly interactive web applications for diverse clients. Collaborated with designers and backend engineers to deliver pixel-perfect, performant user experiences.",
    technologies: ["Next.js", "React", "Express", "MongoDB", "Docker"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Digital Agency",
    url: "https://example.com",
    description:
      "Built responsive websites and web applications for various clients. Focused on creating accessible, SEO-friendly interfaces with modern frontend technologies.",
    technologies: ["JavaScript", "Vue.js", "Tailwind CSS", "REST APIs"],
  },
]

export function Experience() {
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
    <section ref={sectionRef} id="experience" className="px-6 py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 animate-on-scroll">Experience</h2>
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
                      {exp.title} · {exp.company}
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block ml-2 align-middle"
                        aria-label={`Visit ${exp.company}`}
                      >
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>
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
