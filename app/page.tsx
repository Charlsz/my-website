import { Clock } from "./clock";
import { projectsByCategory } from "@/data/projects";
import { Border1 } from "@/components/ui/border1";
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";
import { ProjectMedia } from "@/components/ui/project-media";

export default function Home() {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/my-website" : "";

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Carlos Galvis{" "}
            <img 
              src={`${basePath}/images/cat-pixel.gif`}
              alt="Pixel cat" 
              style={{ width: "50px", height: "50px" }} 
            />
        </h1>
        <p className="header-subtitle">
          Updated {process.env.NEXT_PUBLIC_LAST_UPDATED}
        </p>
      </header>

      <main>
        <section className="about-section">
          <p>
            <strong><em>Full-stack / design engineer.</em></strong>
          </p>
          <p>
            I run <a href="https://github.com/NoruLabs" target="_blank" rel="noopener noreferrer">NoruLabs</a> where I build tools around space and astronomy, starting with <a href="https://www.norusearch.live/" target="_blank" rel="noopener noreferrer">NoruSearch</a>, a universal interface for exploring NASA and astronomical datasets. I participate in hackathons, contribute to open source, and take on freelance projects. Always looking for the next thing worth building.
          </p>
          <p>
            You can find me on <a href="https://x.com/charlswfeelings" target="_blank" rel="noopener noreferrer">X</a>,{" "}
            <a href="https://linkedin.com/in/cgalvisp" target="_blank" rel="noopener noreferrer">LinkedIn</a>,{" "}
            <a href="https://github.com/NoruLabs" target="_blank" rel="noopener noreferrer">GitHub</a>,{" "}
            <a href="https://www.instagram.com/cgalvis._/" target="_blank" rel="noopener noreferrer">Instagram</a>,{" "}
            <a href="https://www.youtube.com/@charlswfeelings" target="_blank" rel="noopener noreferrer">YouTube</a>,{" "}
            or reach me via <a href="mailto:cgalvis21_@hotmail.com">email</a>.
          </p>
        </section>

        <section style={{ marginTop: 80, marginBottom: 80 }}>
          <div className="section-title-row">
            <h2 className="section-title">Projects</h2>
            <a href="https://github.com/Charlsz" target="_blank" rel="noopener noreferrer">See more projects →</a>
          </div>
          <Tabs defaultValue="Web Apps">
            <TabsList>
              {projectsByCategory.map((cat) => (
                <TabsTab key={cat.name} value={cat.name}>{cat.name}</TabsTab>
              ))}
            </TabsList>
            {projectsByCategory.map((cat) => (
              <TabsPanel key={cat.name} value={cat.name}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
                  {cat.projects.map((p) => (
                    <div key={p.title} className="project-card">
                      <div className="project-card-inner">
                        <Border1 />
                      </div>
                      <div className="project-card-content">
                        <ProjectMedia
                          src={p.image ? `${basePath}${p.image}` : undefined}
                          alt={p.alt || p.title}
                          isVideo={!!(p.image && (p.image.endsWith(".mp4") || p.image.endsWith(".webm")))}
                          link={p.link}
                        />
                        <h4 className="project-card-title">{p.title}</h4>
                        {p.summary && <p className="project-card-summary">{p.summary}</p>}
                        {p.stack && (
                          <div className="project-card-stack">
                            {p.stack.split(", ").map((t) => (
                              <span key={t} className="project-card-tag">{t}</span>
                            ))}
                          </div>
                        )}
                        {(p.github || p.link) && (
                          <div className="project-card-actions">
                            {p.github && (
                              <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-card-btn">
                                <img src="https://cdn.simpleicons.org/github" alt="" className="project-card-btn-icon" />
                                Github
                              </a>
                            )}
                            {p.link && (
                              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card-btn project-card-btn-live">
                                <svg className="project-card-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                Live
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsPanel>
            ))}
          </Tabs>
        </section>

        <footer className="footer">
          <div className="footer-line" />
          <p className="footer-text">
            <Clock />
          </p>
          
          <a 
            href="https://www.instagram.com/cgalvis._/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: "block", marginTop: "40px", width: "100%" }}
          >
            <video 
              src={`${basePath}/video/charlie.mp4`}
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover" }}
            />
          </a>
        </footer>
      </main>
    </div>
  );
}
