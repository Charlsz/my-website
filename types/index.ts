export interface Project {
  title: string;
  summary: string;
  focus: string;
  stack: string;
  image: string;
  alt?: string;
  link: string;
}

export interface Contribution {
  repository: string;
  summary: string;
  contributions: string[];
  link: string;
}
