"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function Hero() {
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
    <section id="hero" ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-25">
          <div className="animate-on-scroll animate-float">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
              <img
                src="/me.png"
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance animate-on-scroll relative group">
              <span className="relative inline-block animate-shimmer bg-gradient-to-r from-primary via-accent via-secondary to-primary bg-[length:400%_100%] bg-clip-text text-transparent">
                  Elmahdi Haidri
              </span>
              <span className="absolute inset-0 animate-glitch-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:400%_100%] bg-clip-text text-transparent opacity-70 blur-[2px]">
                Elmahdi Haidri
              </span>
              <span className="absolute inset-0 animate-glitch-2 bg-gradient-to-r from-accent via-secondary to-primary bg-[length:400%_100%] bg-clip-text text-transparent opacity-70 blur-[2px]">
                Elmahdi Haidri
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-light animate-on-scroll animate-on-scroll-delay-1 overflow-hidden border-r-4 border-primary animate-typing whitespace-nowrap inline-block">
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-on-scroll animate-on-scroll-delay-2">
              I build robust, scalable web applications from backend to frontend. Specializing in Java, PHP, and JavaScript to create powerful full-stack solutions.
            </p>

            <div className="flex gap-4 pt-4 justify-center md:justify-start animate-on-scroll animate-on-scroll-delay-3">
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform cursor-target">
                <a href="https://github.com/mehdi-haidri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform cursor-target">
                <a href="https://www.linkedin.com/in/elmahdi-haidri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform cursor-target">
                <a href="mailto:mehdihaidri3@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
