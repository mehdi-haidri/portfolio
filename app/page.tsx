import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { AnimatedBackground } from "@/components/animated-background"
import TargetCursor from '@/components/TargetCursor'
import Loop from "@/components/Loop"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <Header />
      <Hero />
      <Loop />
      <Projects />
      <Contact />
     
    </div>
  )
}
