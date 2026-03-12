import ProjectCard from "./ProjectCard";
import { featuredProjects, academicProjects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="section">
      <h2 className="section-title">My Work</h2>
      <div className="section-line" />

      {featuredProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      <h2 className="section-title">Personal | Academic Projects</h2>
      <div className="section-line" />

      {academicProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
