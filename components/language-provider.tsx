"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "en" | "fr"

const translations = {
  en: {
    portfolio: "Portfolio",
    projects: "Projects",
    about: "About",
    experience: "Experience",
    contact: "Contact",
    softwareEngineer: "Software Engineer",
    heroDescription:
      "Software Engineer passionate about AI and AI-powered products, with a strong interest in developer tools, data platforms, and cloud-native systems.",
    downloadCv: "Download CV",
    cvFile: "/cv/elmahdi_haidri_en.pdf",
    cvDownloadName: "elmahdi_haidri_cv.pdf",
    aboutIntro:
      "Software Engineer passionate about AI and AI-powered products, with a strong interest in developer tools, data platforms, and cloud-native systems. Fast learner who adapts quickly to new technologies and works across Java, Python, React, Spring Boot, microservices, Kubernetes, OCI, and cloud platforms.",
    aboutCollaboration:
      "I enjoy turning complex requirements into reliable full-stack solutions and contributing effectively in collaborative, fast-paced teams.",
    education:
      "I am a Computer Engineering student at ENSAH — National School of Applied Sciences of Al Hoceima, where I am building a strong foundation in software design and modern web technologies.",
    educationDetails: "ENSAH · Al Hoceima — Computer Engineering, September 2021 to July 2026.",
    certifications: "Certifications",
    getInTouch: "Get In Touch",
    workTogether: "Let's Work Together",
    contactDescription:
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    sendEmail: "Send Me an Email",
    code: "Code",
    demo: "Demo",
    language: "Language",
  },
  fr: {
    portfolio: "Portfolio",
    projects: "Projets",
    about: "À propos",
    experience: "Expérience",
    contact: "Contact",
    softwareEngineer: "Ingénieur logiciel",
    heroDescription:
      "Ingénieur logiciel passionné par l'IA et les produits alimentés par l'IA, avec un fort intérêt pour les outils développeur, les plateformes de données et les systèmes cloud-native.",
    downloadCv: "Télécharger le CV",
    cvFile: "/cv/elmahdi_haidri_fr.pdf",
    cvDownloadName: "elmahdi_haidri_cv.pdf",
    aboutIntro:
      "Ingénieur logiciel passionné par l'IA et les produits alimentés par l'IA, avec un fort intérêt pour les outils développeur, les plateformes de données et les systèmes cloud-native. J'apprends rapidement et je m'adapte aux nouvelles technologies en travaillant avec Java, Python, React, Spring Boot, les microservices, Kubernetes, OCI et les plateformes cloud.",
    aboutCollaboration:
      "J'aime transformer des besoins complexes en solutions full-stack fiables et contribuer efficacement au sein d'équipes collaboratives et dynamiques.",
    education:
      "Je suis étudiant en Génie Informatique à l'ENSAH — École Nationale des Sciences Appliquées d'Al Hoceima, où je développe une solide base en conception logicielle et en technologies web modernes.",
    educationDetails: "ENSAH · Al Hoceima — Formation en Génie Informatique, de septembre 2021 à juillet 2026.",
    certifications: "Certifications",
    getInTouch: "Me contacter",
    workTogether: "Travaillons ensemble",
    contactDescription:
      "Je suis toujours intéressé par de nouveaux projets et opportunités. Vous avez une question ou souhaitez simplement me dire bonjour ? N'hésitez pas à me contacter !",
    sendEmail: "M'envoyer un e-mail",
    code: "Code",
    demo: "Démo",
    language: "Langue",
  },
} as const

type TranslationKey = keyof typeof translations.en

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language")
    if (savedLanguage === "en" || savedLanguage === "fr") {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem("portfolio-language", nextLanguage)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: (key) => translations[language][key],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
