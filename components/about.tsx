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
            Currently, I'm a Full Stack Developer at <span className="font-medium text-primary">Your Company</span>,
            specializing in building scalable web applications. I contribute to the creation and maintenance of both
            frontend and backend systems, ensuring our platform meets modern web standards and best practices to deliver
            an exceptional user experience.
          </p>
          <p className="text-pretty animate-on-scroll animate-on-scroll-delay-3">
            In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
            <span className="font-medium text-primary">tech startups</span> and{" "}
            <span className="font-medium text-primary">large corporations</span> to{" "}
            <span className="font-medium text-primary">digital agencies</span> and{" "}
            <span className="font-medium text-primary">freelance projects</span>. Additionally, I also released a{" "}
            <span className="font-medium text-primary">comprehensive video course</span> a few years ago, guiding
            learners through building a full-stack web application.
          </p>
        </div>
      </div>
    </section>
  )
}
