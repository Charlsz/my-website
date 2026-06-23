"use client"

import { useState } from "react"

export function ProjectMedia({ src, alt, isVideo, link }: { src?: string; alt: string; isVideo: boolean; link?: string }) {
  const [fallback, setFallback] = useState(false)

  if (!src || fallback) return null

  const el = isVideo ? (
    <video src={src} autoPlay loop muted playsInline className="project-card-media" onError={() => setFallback(true)} />
  ) : (
    <img src={src} alt={alt} className="project-card-media" onError={() => setFallback(true)} />
  )

  return link ? <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-media-link">{el}</a> : el
}
