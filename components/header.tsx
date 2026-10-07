"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage, type Language } from "@/components/language-provider"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className=" cursor-target text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            {t("portfolio")}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className=" cursor-target text-foreground/80 hover:text-primary transition-colors"
            >
              {t("projects")}
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className=" cursor-target bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              {t("contact")}
            </Button>
            <LanguageSwitcher language={language} setLanguage={setLanguage} label={t("language")} />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                {t("projects")}
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full"
              >
                {t("contact")}
              </Button>
              <LanguageSwitcher language={language} setLanguage={setLanguage} label={t("language")} />
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function LanguageSwitcher({
  language,
  setLanguage,
  label,
}: {
  language: Language
  setLanguage: (language: Language) => void
  label: string
}) {
  return (
    <div className="flex items-center gap-1 text-sm" aria-label={label}>
      {(["en", "fr"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={`cursor-target rounded px-2 py-1 uppercase transition-colors ${
            language === option ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
          }`}
          aria-pressed={language === option}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
