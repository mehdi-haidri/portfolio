"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef } from "react"
import { useLanguage } from "@/components/language-provider"

const projects = [
  {
    title: { en: "AI-powered RAG chatbot", fr: "Chatbot RAG alimenté par l'IA" },
    description: {
      en: "AI-powered RAG chatbot that scans medical reports and provides relevant answers based on a structured database. The goal? To make medical information more accessible and insightful!",
      fr: "Chatbot RAG alimenté par l'IA qui analyse des rapports médicaux et fournit des réponses pertinentes basées sur une base de données structurée. L'objectif ? Rendre l'information médicale plus accessible et pertinente !",
    },
    image: "/v2_dark.png",
    technologies: ["React.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/mehdi-haidri/RagSystem_V2?tab=readme-ov-file",
    demo: "https://rag-system-v2.vercel.app/",
  },
  {
    title: { en: "DataAnnotation Platform", fr: "Plateforme d'annotation de données" },
    description: {
      en: "A smart and secure platform for managing NLP dataset annotation tasks!",
      fr: "Une plateforme intelligente et sécurisée pour gérer les tâches d'annotation de jeux de données NLP !",
    },
    image: "/nlp.jpeg",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    github: "https://github.com/mehdi-haidri/Plateforme_d-annotation_collaborative",
  },
  {
    title: { en: "E-Commerce Platform", fr: "Plateforme e-commerce" },
    description: {
      en: "A scalable e-commerce platform built with Spring Boot, Kafka, JWT authentication, and cloud storage.",
      fr: "Une plateforme e-commerce évolutive construite avec Spring Boot, Kafka, l'authentification JWT et le stockage cloud.",
    },
    image: "/e-comerce.jpg",
    technologies: ["java", "Spring Boot", "kafka", "jwt", "mysql", "MongoDB" ,"AWS S3"],
    github: "https://github.com/mehdi-haidri/mehdi-haidri-Spring_Ecommerce_Project"
  },
]

export function Projects() {
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
    <section ref={sectionRef} id="projects" className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 animate-on-scroll">{t("projects")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group animate-on-scroll overflow-hidden border-border/60 bg-card/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/10"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title[language]}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">{project.description[language]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="cursor-target border-primary/30 hover:bg-primary/10 bg-transparent hover:scale-105 transition-transform"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t("code")}
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="cursor-target border-primary/30 bg-transparent transition-colors hover:bg-primary/10"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("demo")}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
