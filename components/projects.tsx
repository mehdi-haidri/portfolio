"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useEffect, useRef } from "react"
import ElectricBorder from "./ElectricBorder"

const projects = [
  {
    title: "AI-powered RAG chatbot",
    description:
      "AI-powered RAG chatbot that scans medical reports and provides relevant answers based on a structured database. The goal? To make medical information more accessible and insightful!",
    image: "/v2_dark.png",
    technologies: ["React.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/mehdi-haidri/RagSystem_V2?tab=readme-ov-file",
    demo: "https://rag-system-v2.vercel.app/",
  },
  {
    title: "DataAnnotation Platform",
    description:
      "a smart and secure platform for managing NLP dataset annotation tasks!",
    image: "/nlp.jpeg",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    github: "https://github.com/mehdi-haidri/Plateforme_d-annotation_collaborative",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Analytics dashboard for social media metrics with data visualization, scheduling, and multi-platform integration.",
    image: "/e-comerce.jpg",
    technologies: ["java", "Spring Boot", "kafka", "jwt", "mysql", "MongoDB" ,"AWS S3"],
    github: "https://github.com/mehdi-haidri/mehdi-haidri-Spring_Ecommerce_Project"
  },
]

export function Projects() {
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
    <section ref={sectionRef} id="projects" className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12 animate-on-scroll">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
                 key={index}
              className="transition-all animate-on-scroll hover:-translate-y-2">

            <ElectricBorder
              className={" animate-on-scroll"}
              color="#ad46ff"
              speed={0.1}
              chaos={0.5}
              thickness={1.5}
              style={{ borderRadius: 16 }}
            >
            <Card
        
              className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/20  border-primary/10  hover:border-primary/30"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
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
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className=" cursor-target border-primary/30 hover:bg-primary/10 bg-transparent hover:scale-105 transition-transform"
                  >
                   { project?.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>}
                  </Button>
                </div>
              </CardContent>
              </Card>
              </ElectricBorder>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
