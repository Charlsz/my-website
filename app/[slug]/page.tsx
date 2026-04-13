import { featuredProjects, academicProjects } from "@/data/projects";
import Link from "next/link";

export async function generateStaticParams() {
  const allProjects = [...featuredProjects, ...academicProjects];
  return allProjects
    .filter((p) => p.slug)
    .map((p) => ({
      slug: p.slug as string,
    }));
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const project = [...featuredProjects, ...academicProjects].find(
    (p) => p.slug === slug
  );

  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/my-website" : "";

  if (!project) {
    return (
      <div className="container">
        <div style={{ marginBottom: "40px" }}>
          <Link href="/" className="list-row" style={{ display: "inline-flex", padding: 0 }}>
            <div className="list-name">← Back to home</div>
          </Link>
        </div>
        <header className="header">
          <h1 className="header-title">Project not found</h1>
        </header>
      </div>
    );
  }

  return (
    <div className="container">
      <div style={{ marginBottom: "40px" }}>
        <Link href="/" className="list-row" style={{ display: "inline-flex", padding: 0 }}>
          <div className="list-name">← Back to home</div>
        </Link>
      </div>
      <header className="header">
        <h1 className="header-title">{project.title}</h1>
        {project.stack && <p className="header-subtitle">{project.stack}</p>}
      </header>

      <main>
        <section className="about-section">
          {project.image && (
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "30px" }}>
              {project.image.endsWith(".mp4") || project.image.endsWith(".webm") ? (
                <video
                  className="project-media project-media-video"
                  src={`${basePath}${project.image}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img 
                  className="project-media project-media-img"
                  src={`${basePath}${project.image}`} 
                  alt={project.title} 
                />
              )}
            </div>
          )}

          {project.focus && (
            <p><strong>Focus:</strong> {project.focus}</p>
          )}

          <p>{project.summary}</p>
          
          {project.link && (
            <p style={{ marginTop: "30px" }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project ↗
              </a>
            </p>
          )}
        </section>
      </main>
    </div>
  );
}