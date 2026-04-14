"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  featuredProjects,
  academicProjects,
  openSourceContributions,
} from "@/data/projects";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<string>("");

  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/my-website" : "";

  useEffect(() => {
    setMounted(true);
    
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Bogota",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
            I’m a Systems and Computer Engineering student at Universidad del Norte in Barranquilla, Colombia.
          </p>
          <p>
            I currently work at my personal project <a href="https://www.norusearch.live/" target="_blank" rel="noopener noreferrer">Noru Search</a>,{" "} 
            where I develop tools and applications related to astrophysics and astronomy. 
            I focus on creating intuitive interfaces for exploring astronomical data in a simpler way.
          </p>
          <p>
            I'm constantly learning, experimenting with new technologies, and 
            looking for ways to turn ideas into products that add real value for people.
          </p>
          <p>
            You can find me on <a href="https://x.com/charlswfeelings" target="_blank" rel="noopener noreferrer">X</a>,{" "}
            <a href="https://linkedin.com/in/cgalvisp" target="_blank" rel="noopener noreferrer">LinkedIn</a>,{" "}
            <a href="https://github.com/Charlsz" target="_blank" rel="noopener noreferrer">GitHub</a>,{" "}
            <a href="https://www.instagram.com/cgalvis._/" target="_blank" rel="noopener noreferrer">Instagram</a>,{" "}
            <a href="https://www.youtube.com/@charlswfeelings" target="_blank" rel="noopener noreferrer">YouTube</a>,{" "}
            or reach me via <a href="mailto:cgalvis21_@hotmail.com">email</a>.
          </p>
        </section>

        <section className="list-section">
          <h2 className="section-title">My Work</h2>

          <div className="list-container">
            {featuredProjects.map((project, index) => {
              const isRight = index % 2 === 0;
              const hasVideo = project.image?.endsWith(".mp4");
              
              const innerContent = (
                <>
                  <div className="list-name">
                    {project.title.split(" -")[0] || project.title}
                  </div>
                  <div className="list-date">↗</div>
                  {project.image && (
                    <div className={`project-preview ${isRight ? 'preview-right' : 'preview-left'}`}>
                      {hasVideo ? (
                        <video src={`${basePath}${project.image}`} autoPlay loop muted playsInline className="preview-media" />
                      ) : (
                        <img src={`${basePath}${project.image}`} alt={project.alt || project.title} className="preview-media" />
                      )}
                    </div>
                  )}
                </>
              );

              return project.slug ? (
                <Link
                  key={project.title}
                  href={`/${project.slug}`}
                  className="list-row"
                >
                  {innerContent}
                </Link>
              ) : (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-row"
                >
                  {innerContent}
                </a>
              );
            })}
          </div>

          <div className="list-gap" />
          <h2 className="section-title">Academic & Personal</h2>

          <div className="list-container">
            {academicProjects.map((project, index) => {
              const isRight = index % 2 === 0;
              const hasVideo = project.image?.endsWith(".mp4");
              
              const innerContent = (
                <>
                  <div className="list-name">
                    {project.title.split(" -")[0] || project.title}
                  </div>
                  <div className="list-date">↗</div>
                  {project.image && (
                    <div className={`project-preview ${isRight ? 'preview-right' : 'preview-left'}`}>
                      {hasVideo ? (
                        <video src={`${basePath}${project.image}`} autoPlay loop muted playsInline className="preview-media" />
                      ) : (
                        <img src={`${basePath}${project.image}`} alt={project.alt || project.title} className="preview-media" />
                      )}
                    </div>
                  )}
                </>
              );

              return project.slug ? (
                <Link
                  key={project.title}
                  href={`/${project.slug}`}
                  className="list-row"
                >
                  {innerContent}
                </Link>
              ) : (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-row"
                >
                  {innerContent}
                </a>
              );
            })}
          </div>

          <div className="list-gap" />
          <h2 className="section-title">Contributions</h2>

          <div className="list-container">
            {openSourceContributions.map((item) => (
              <a
                key={item.repository}
                href={item.link || `https://github.com/${item.repository}`}
                target="_blank"
                rel="noopener noreferrer"
                className="list-row"
              >
                <div className="list-name">{item.repository}</div>
                <div className="list-date">↗</div>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-line" />
          <p className="footer-text">
            {mounted && time ? `${time} in Colombia` : "Colombia"}
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
