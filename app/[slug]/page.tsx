import { featuredProjects, academicProjects } from "@/data/projects";
import { basePath } from "@/next.config";

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

  if (!project) {
    return (
      <div className="container">
        <header className="header">
          <h1 className="header-title">Project not found</h1>
        </header>
        <main>
          <a href={`${basePath}/`} className="list-row" style={{ marginTop: '20px' }}>
            <div className="list-name">← Back to home</div>
          </a>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
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
                  src={`${basePath}${project.image}`}
                  style={{ 
                    width: "175%", /* <-- Ajusta SOLO este valor (ej: "80%" o "500px") para cambiar el tamaño */
                    height: "auto", 
                    pointerEvents: "none" 
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img 
                  src={`${basePath}${project.image}`} 
                  alt={project.title} 
                  style={{ 
                    width: "200%", /* <-- Ajusta SOLO este valor (ej: "80%" o "500px") para cambiar el tamaño */
                    height: "auto" 
                  }} 
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

          <div className="list-gap" />
          
          <a href={`${basePath}/`} className="list-row" style={{ marginTop: '50px' }}>
            <div className="list-name">← Back to home</div>
          </a>
        </section>
      </main>
    </div>
  );
}