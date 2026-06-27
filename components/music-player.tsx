"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BAR_COUNT = 4;

function getRandomHeights() {
  return Array.from({ length: BAR_COUNT }, () => Math.random() * 0.8 + 0.2);
}

function formatInactive(seconds: number) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const parts: string[] = [];
  if (d) parts.push(`${d}d`);
  if (h) parts.push(`${h}h`);
  if (m) parts.push(`${m}m`);
  if (!parts.length || s) parts.push(`${s}s`);
  return `${parts.join(" ")} ago`;
}

export default function MusicPlayer() {
  const [status, setStatus] = useState<{
    isPlaying: boolean;
    title: string | null;
    artist: string | null;
    songUrl: string | null;
    playedAt: string | null;
  } | null>(null);

  const [heights, setHeights] = useState(() => Array(BAR_COUNT).fill(0.3));
  const [showInfo, setShowInfo] = useState(false);
  const [inactiveSeconds, setInactiveSeconds] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const stoppedAtRef = useRef<string | null>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice] = useState(() => typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0));

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/spotify/status");
        const data = await res.json();
        setStatus(data);
      } catch {
        setStatus(null);
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (status?.isPlaying) {
      const id = setInterval(() => setHeights(getRandomHeights()), 180);
      return () => clearInterval(id);
    }
    setHeights(Array(BAR_COUNT).fill(0.3));
  }, [status?.isPlaying]);

  useEffect(() => {
    setShowInfo(false);
  }, [status?.isPlaying]);

  useEffect(() => {
    if (status?.isPlaying) {
      stoppedAtRef.current = null;
      setInactiveSeconds(0);
      return;
    }

    if (status?.playedAt && !stoppedAtRef.current) {
      stoppedAtRef.current = status.playedAt;
    }

    if (!stoppedAtRef.current) return;

    const tick = () => {
      const diff = Math.floor((Date.now() - new Date(stoppedAtRef.current!).getTime()) / 1000);
      setInactiveSeconds(Math.max(0, diff));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [status?.isPlaying]);

  useEffect(() => {
    if (!isTouchDevice) return;
    const handleDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (btnRef.current?.contains(target) || bubbleRef.current?.contains(target)) return;
      setIsHovered(false);
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, [isTouchDevice]);

  if (!status) return null;

  const playing = status.isPlaying;
  const barColor = playing ? "#111" : "#d4d4d8";

  return (
    <>
      <div
        ref={btnRef}
        onClick={() => {
          if (!playing) return;
          if (isTouchDevice) {
            if (!isHovered) { setIsHovered(true); return; }
            setShowInfo((p) => !p);
          } else {
            setShowInfo((p) => !p);
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "fixed",
          bottom: 24,
          left: 24,
          zIndex: 999,
          width: 28,
          height: 28,
          borderRadius: 6,
          background: "#fff",
          border: "2px solid #a7a7a7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: playing ? "pointer" : "default",
          userSelect: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5, height: 12 }}>
          {heights.map((h, i) => (
            <motion.div
              key={i}
              animate={playing ? { height: Math.max(3, h * 10) } : { height: 6 }}
              transition={
                playing
                  ? { type: "spring", stiffness: 150, damping: 12, mass: 0.3 }
                  : { duration: 0.3 }
              }
              style={{ width: 2, borderRadius: 1, background: barColor, willChange: "transform" }}
            />
          ))}
        </div>
      </div>

      <div ref={bubbleRef} tabIndex={-1} style={{ position: "fixed", bottom: 24, left: 60, zIndex: 999, userSelect: "none" }}>
        <AnimatePresence mode="wait">
          {!playing && isHovered && (
            <motion.div
              key="inactive"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
              style={{
                height: 28,
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
                borderRadius: 6,
                background: "#fff",
                border: "2px solid #a7a7a7",
                fontSize: 11,
                color: "#a1a1aa",
                whiteSpace: "nowrap",
                willChange: "transform, opacity",
              }}
            >
              Charlie was here {formatInactive(inactiveSeconds)}
            </motion.div>
          )}
          {playing && !showInfo && isHovered && (
            <motion.div
              key="hint"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
              style={{
                height: 28,
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
                borderRadius: 6,
                background: "#fff",
                border: "2px solid #a7a7a7",
                fontSize: 11,
                color: "#888",
                whiteSpace: "nowrap",
                willChange: "transform, opacity",
              }}
            >
              Charlie is listening music right now
            </motion.div>
          )}
          {playing && showInfo && (
            <motion.a
              key="full"
              href={status.songUrl || undefined}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
              style={{
                height: 28,
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "0 10px",
                borderRadius: 6,
                background: "#fff",
                border: "2px solid #a7a7a7",
                textDecoration: "none",
                color: "inherit",
                fontSize: 11,
                whiteSpace: "nowrap",
                willChange: "transform, opacity",
              }}
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="#111" style={{ flexShrink: 0 }}>
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span>
                <span style={{ fontWeight: 600 }}>
                  {status.title}{status.artist ? ` — ${status.artist}` : ""}
                </span>
              </span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
