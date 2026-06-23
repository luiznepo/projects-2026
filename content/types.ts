export interface Experience {
  role: string
  period: string
  company: string
}

export interface Skill {
  icon: string
  title: string
  description: string
  tools: string[]
}

export interface Project {
  client: string
  title: string
  description: string
  image?: string
  embedUrl?: string
  ctaLink?: string
  tags?: string[]
}

export interface SiteContent {
  meta: { title: string; description: string }
  nav: {
    home: string
    about: string
    skills: string
    works: string
  }
  hero: {
    name: string
    role: string
    cta: string
    phone: string
    email: string
  }
  about: {
    label: string
    title: string
    stat1Value: string
    stat1Label: string
    stat1Desc: string
    stat2Value: string
    stat2Label: string
    stat2Desc: string
    phone: string
    email: string
    location: string
    quote: string
    quoteAuthor: string
  }
  experience: {
    label: string
    title: string
    resumeBtn: string
    resumeUrl: string
    items: Experience[]
  }
  skills: {
    label: string
    title: string
    items: Skill[]
  }
  works: {
    label: string
    title: string
    moreBtn: string
    lessBtn: string
    projectCta: string
    projects: Project[]
    extraProjects: Project[]
  }
  langButtons: {
    pt: string
    es: string
    en: string
  }
}
