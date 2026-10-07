import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { AnimatedBackground } from "@/components/animated-background"
import TargetCursor from '@/components/TargetCursor'
import { LanguageProvider } from "@/components/language-provider"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
     
      </div>
    </LanguageProvider>
  )
}
