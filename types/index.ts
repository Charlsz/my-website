export interface ProjectCard {
  title: string
  slug?: string
  summary: string
  focus?: string
  stack?: string
  image?: string
  link?: string
  github?: string
  alt?: string
}

export interface ProjectCategory {
  name: string
  projects: ProjectCard[]
}
