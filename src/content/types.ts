export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
  relevantCourses?: string[]
}

export interface Certificate {
  id: string
  name: string
  issuingOrg: string
  status: 'in-progress' | 'completed'
  year: string
  verifyUrl?: string
  description?: string
}

export interface TechItem {
  id: string
  name: string
  category: 'frontend' | 'design' | 'audio' | 'cloud' | 'backend' | 'toolkit'
  icon: string
  description: string
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface Project {
  id: string
  title: string
  problemStatement: string
  description: string
  role: string
  stack: string[]
  constraints: string[]
  highlights: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  writeupUrl?: string
  featured: boolean
}

export interface SchoolProject {
  id: string
  title: string
  course: string
  description: string
  semester: string
  whatLearned: string[]
  contributions: string[]
  codePreview: {
    file: string
    language: string
    code: string
  }
  githubUrl?: string
  technologies: string[]
}

export interface CaseStudy {
  id: string
  title: string
  problemStatement: string
  description: string
  role: string
  stack: string[]
  constraints: string[]
  highlights: string[]
  images: string[]
  liveUrl?: string
  githubUrl?: string
  writeupUrl?: string
  codePreview: {
    file: string
    language: string
    code: string
  }
}

export interface ContactInfo {
  id: string
  type: 'email' | 'phone' | 'linkedin' | 'github'
  label: string
  value: string
  url: string
  icon: string
} 