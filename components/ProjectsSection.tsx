import ProjectCard from "./ProjectCard";
import {
  featuredProjects,
  academicProjects,
  openSourceContributions,
} from "@/data/projects";

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

      <h2 className="section-title">Contributions</h2>
      <div className="section-line" />

      {openSourceContributions.map((item) => (
        <article className="contribution-article" key={item.repository}>
          <h4 className="project-headline">{item.repository}</h4>
          <p className="project-summary">{item.summary}</p>
          <div className="project-details">
            <span className="detail-item">
              <strong>What I contributed:</strong>
            </span>
            <ul className="contribution-list">
              {item.contributions.map((contribution) => (
                <li className="detail-item" key={contribution}>
                  {contribution}
                </li>
              ))}
            </ul>
            <span className="detail-item">
              <strong>GitHub:</strong>{" "}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </span>
          </div>
        </article>
      ))}
    </section>
  );
}
