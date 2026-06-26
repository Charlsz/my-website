import type { ProjectCategory } from "@/types";

export const projectsByCategory: ProjectCategory[] = [
  {
    name: "Web Apps",
    projects: [
      {
        title: "NoruSearch - Universal space data browser",
        slug: "norusearch",
        summary: "Search, explore, and visualize NASA (and many more) datasets from a single interface",
        focus: "NASA Datasets, Space Visualization, Universal Search",
        stack: "Next.js, TypeScript, React Query, Tailwind CSS, Recharts",
        image: "/images/norusearch.png",
        alt: "NoruSearch Project",
        link: "https://www.norusearch.live/",
      },
      {
        title: "Ferret - Local-first AI workspace explorer",
        slug: "ferret",
        summary: "Local-first web app for browsing private workspaces and asking built-in AI to explain files, summarize code, and locate content by name, path, or text.",
        focus: "Local-first Search, AI File Exploration, Privacy",
        stack: "Next.js, Web Workers, @mlc-ai/web-llm, TypeScript",
        image: "/images/ferret.png",
        alt: "Ferret Project",
        link: "https://tryferret.vercel.app/",
      },
      {
        title: "Structura - GitHub Repo Visualizer",
        slug: "structura",
        summary: "Interactive tool for visualizing GitHub repositories with diagrams and data insights.",
        focus: "GitHub Visualization, Diagrams, Data Insights",
        stack: "Next.js, TypeScript, Vercel",
        image: "/images/structura.png",
        alt: "Structura Project",
        link: "https://structura-git.vercel.app/",
      },
    ],
  },
  {
    name: "Skill Build",
    projects: [
      {
        title: "RISE - Rocket Integrated Simulation Environment",
        slug: "rise",
        summary: "Rocket flight simulation environment developed under NoruLabs. Models physics, trajectory, and performance parameters for rocket systems.",
        focus: "Simulation, Aerospace, Physics Modeling",
        stack: "Python",
        github: "https://github.com/NoruLabs/RISE",
      },
      {
        title: "STAR - Space Taxonomy and Analysis Recognition",
        slug: "star",
        summary: "Python project for classifying and analyzing space object data. Combines taxonomy systems with pattern recognition for astronomical datasets.",
        focus: "Space Data, Classification, Python Analysis",
        stack: "Python",
        github: "https://github.com/Charlsz/star",
      },
      {
        title: "Alerta - Early Warning System",
        slug: "alerta",
        summary: "Python-based early warning and alert system built for a programming contest. Focuses on data processing and real-time notifications.",
        focus: "Alert System, Data Processing, Python",
        stack: "Python",
        github: "https://github.com/Charlsz/Alerta",
      },
    ],
  },
  {
    name: "Freelance",
    projects: [
      {
        title: "HRG Soluciones S.A.S Website",
        slug: "hrg-soluciones",
        summary: "Corporate website for a real client featuring electrical, construction, and maintenance services.",
        focus: "Corporate Website, Freelance, Professional Services",
        stack: "HTML, CSS, JavaScript, TypeScript",
        image: "/images/hrgsoluciones.png",
        alt: "HRG Soluciones Project",
        link: "https://hrgsoluciones.com",
      },
    ],
  },
]
