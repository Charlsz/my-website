import { Project } from "@/types";
import { basePath } from "@/next.config";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-article">
      <div className="project-content">
        <h4 className="project-headline">{project.title}</h4>
        <p className="project-summary">{project.summary}</p>
        <div className="project-details">
          <span className="detail-item">
            <strong>Focus:</strong> {project.focus}
          </span>
          <span className="detail-item">
            <strong>Stack:</strong> {project.stack}
          </span>
        </div>
      </div>
      <div className="project-image">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={`${basePath}${project.image}`}
            className="project-images"
            alt={project.alt || project.title}
          />
        </a>
      </div>
    </article>
  );
}
