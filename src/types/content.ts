export type Language = 'vi' | 'en'

export interface NavigationContent {
  intro: string
  about: string
  projects: string
  experience: string
  skills: string
  education: string
  contact: string
}

export interface IntroContent {
  eyebrow: string
  name: string
  title: string
  tagline: string
  description: string
  viewProjects: string
  downloadResume: string
}

export interface AboutContent {
  heading: string
  tagline: string
  description: string[]
}

export interface ProjectContent {
  slug: string
  title: string
  summary: string
  description: string
  organization?: {
    name: string
    url: string
  }
  technologies: string[]
  features: string[]
  challenges: string[]
  learnings: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface ProjectsContent {
  heading: string
  tagline: string
  description: string
  items: ProjectContent[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface SkillsContent {
  heading: string
  tagline: string
  description: string
  groups: SkillGroup[]
}

export interface EducationContent {
  tagline: string
  heading: string
  school: string
  degree: string
  period: string
  status: string
  gpa: string
  description: string
  courseworkLabel: string
  coursework: string[]
}

export interface ContactContent {
  tagline: string
  heading: string
  description: string
  ctaHeading: string
  ctaDescription: string
  ctaButton: string
  emailLabel: string
  email: string
  githubLabel: string
  githubUrl: string
  linkedinLabel: string
  linkedinUrl: string
  footerText: string
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  description: string
  location?: string
  employmentType?: string
  isLatest?: boolean
}

export interface ExperienceContent {
  heading: string
  tagline: string
  description: string
  items: ExperienceItem[]
}

export interface PortfolioContent {
  navigation: NavigationContent
  intro: IntroContent
  about: AboutContent
  projects: ProjectsContent
  skills: SkillsContent
  experience: ExperienceContent
  education: EducationContent
  contact: ContactContent
}
