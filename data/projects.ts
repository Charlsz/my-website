import { Contribution, Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    title: "NoruSearch - Universal space data browser",
    slug: "norusearch",
    summary:
      "Search, explore, and visualize NASA (and many more) datasets from a single interface",
    focus: "NASA Datasets, Space Visualization, Universal Search",
    stack: "Next.js, TypeScript, React Query, Tailwind CSS, Recharts.",
    image: "/images/norusearchvideo.mp4",
    alt: "NoruSearch Project",
    link: "https://www.norusearch.live/",
  },
  {
    title: "Structura - GitHub Repo Visualizer",
    slug: "structura",
    summary:
      "Interactive tool for visualizing GitHub repositories with diagrams and data insights. Built to explore advanced web viz and data handling.",
    focus: "GitHub Visualization, Diagrams, Data Insights",
    stack: "Next.js, TypeScript, Vercel Hosting",
    image: "/images/structura.png",
    alt: "Structura Project",
    link: "https://structura-git.vercel.app/",
  },
  {
    title: "LoLForge - AI-Powered League of Legends Recap",
    slug: "lolforge",
    summary:
      "Year-end performance analytics platform using AWS Bedrock AI to generate personalized insights for League of Legends players. Built for the Rift Rewind Hackathon 2025.",
    focus: "AI Insights, Gaming Analytics, Project",
    stack: "Next.js, TypeScript, AWS Bedrock, Riot Games API, AWS Amplify",
    image: "/images/lolforge.png",
    alt: "LoLForge Project",
    link: "https://github.com/Charlsz/lolforge",
  },
  {
    title: "Anime Dark Store Website",
    slug: "anime-dark-store",
    summary:
      "E-commerce platform for anime merchandise with a dark-themed user interface.",
    focus: "Anime Merchandise, E-commerce",
    stack: "React, Next.js, Supabase, Vercel Hosting",
    image: "/images/animedark.png",
    link: "https://animedark-xi.vercel.app/",
  },
  {
    title: "HRG Soluciones S.A.S Website",
    slug: "hrg-soluciones",
    summary:
      "Corporate website featuring electrical, construction, and maintenance services.",
    focus: "Corporate Website, Professional Services",
    stack: "HTML, CSS, JavaScript, TypeScript",
    image: "/images/hrgsoluciones.png",
    link: "https://hrgsoluciones.com",
  },
];

export const academicProjects: Project[] = [
  {
    title: "SVG Half-tone Filter",
    slug: "svg-half-tone",
    summary:
      "Interactive application that applies half-tone effects to images using advanced SVG filters and JavaScript.",
    focus: "SVG Filters, Image Processing",
    stack: "HTML, CSS, JavaScript",
    image: "/images/svg-filter.png",
    link: "https://charlsz.github.io/SVG-image-filter/",
  },
  {
    title: "Rentzu - Rental Management Platform",
    slug: "rentzu",
    summary:
      "Modern rental property management system with real-time updates and user authentication.",
    focus: "Property Management, Real Estate, SaaS",
    stack: "Next.js, Supabase, TypeScript, Vercel Hosting",
    image: "/images/rentzu.png",
    alt: "Rentzu Project",
    link: "https://github.com/Charlsz/rentzu",
  },
  {
    title: "Slider 3D Design",
    slug: "slider-3d",
    summary: "Website - 3D slider effect using CSS.",
    focus: "3D Design",
    stack: "HTML, CSS",
    image: "/images/frieren-slider.png",
    link: "https://github.com/Charlsz/slider_design",
  },
  {
    title: "Host Roble - University Platform Integration",
    slug: "host-roble",
    summary:
      "Microservices-based authentication system integrating with Universidad del Norte's Roble platform using Docker containers.",
    focus: "Authentication, Microservices, University Integration",
    stack: "Docker, Postman, Microservices Architecture, Roble API",
    image: "/images/host_roble.png",
    alt: "Host Roble Project",
    link: "https://github.com/Charlsz/host_roble",
  },
];

export const openSourceContributions: Contribution[] = [
  {
    repository: "erictli/scratch",
    summary:
      "A minimalist, offline-first markdown note-taking app for Mac",
    contributions: [
      "Add Windows support (#11) - Implemented cross-platform compatibility to enable Scratch to run on Windows, expanding its accessibility beyond macOS.",
    ],
    link: "https://github.com/erictli/scratch",
  },
  {
    repository: "wespreadjam/jam-nodes",
    summary: "Workflow nodes library for Jam framework with social media integrations",
    contributions: [
      "Add Twitter/X integration (#22) - Added 7 new Twitter/X operation nodes (tweet, like, retweet, DM, search, delete, user lookup), OAuth2 PKCE + OAuth 1.0a (HMAC-SHA1) credential support, Zod schemas, unit tests, and full CLI/web playground integration.",
      "Add Discord integration (#24) - Added discord_send_message, discord_send_webhook, discord_create_thread nodes with bot token + webhook credentials, embed support, Zod schemas, unit tests, and CLI/web playground integration.",
    ],
    link: "https://github.com/wespreadjam/jam-nodes",
  },
  {
    repository: "wespreadjam/jam-discord-bot",
    summary: "jam bot is a discord bot that gamifies your community. it tracks messages, awards xp, manages referrals, and hands out jam-themed roles as members level up.",
    contributions: [
      "Add /rank progress bar + /8ball command (#5) - Implemented XP progress visualization with bar/emoji and Magic 8-Ball slash command with 20 themed responses.",
      "Update /8ball to show question + answer (#6) - Enhanced embed to display user question and random response with footer.",
      "Add welcome message for new members (#8) - Implemented simple 'welcome to Jam, [member]'.",
      "Add /serverinfo + /countdown commands (#9) - Added server stats embed (members/channels/boosts) and UTC countdown embed with dynamic timestamps.",
    ],
    link: "https://github.com/wespreadjam/jam-discord-bot",
  },
];
