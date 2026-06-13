"use client";

import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  shape: "petal" | "dot" | "ring" | "leaf";
  opacity: number;
}

const particles: Particle[] = [
  { id: 1,  x: "8%",  y: "20%", size: 18, duration: 9,  delay: 0,    shape: "petal", opacity: 0.25 },
  { id: 2,  x: "88%", y: "15%", size: 8,  duration: 12, delay: 1.2,  shape: "dot",   opacity: 0.3  },
  { id: 3,  x: "15%", y: "65%", size: 24, duration: 11, delay: 0.5,  shape: "ring",  opacity: 0.15 },
  { id: 4,  x: "78%", y: "55%", size: 14, duration: 8,  delay: 2,    shape: "petal", opacity: 0.2  },
  { id: 5,  x: "50%", y: "85%", size: 10, duration: 13, delay: 0.8,  shape: "dot",   opacity: 0.2  },
  { id: 6,  x: "92%", y: "75%", size: 20, duration: 10, delay: 1.8,  shape: "leaf",  opacity: 0.18 },
  { id: 7,  x: "35%", y: "10%", size: 6,  duration: 14, delay: 3,    shape: "dot",   opacity: 0.25 },
  { id: 8,  x: "65%", y: "40%", size: 28, duration: 9,  delay: 0.3,  shape: "ring",  opacity: 0.1  },
  { id: 9,  x: "22%", y: "40%", size: 12, duration: 11, delay: 2.5,  shape: "petal", opacity: 0.2  },
  { id: 10, x: "72%", y: "88%", size: 16, duration: 8,  delay: 1.5,  shape: "leaf",  opacity: 0.22 },
];

function ParticleShape({ shape, size, color = "#C4943A" }: { shape: Particle["shape"]; size: number; color?: string }) {
  switch (shape) {
    case "petal":
      return (
        <svg width={size} height={size * 1.6} viewBox="0 0 20 32" fill="none">
          <path
            d="M10 2 C10 2, 18 10, 18 18 C18 26, 10 30, 10 30 C10 30, 2 26, 2 18 C2 10, 10 2, 10 2Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
        </svg>
      );
    case "dot":
      return (
        <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="3" fill={color} />
        </svg>
      );
    case "ring":
      return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="12" stroke={color} strokeWidth="0.75" fill="none" />
          <circle cx="15" cy="15" r="7"  stroke={color} strokeWidth="0.5"  fill="none" opacity="0.5" />
        </svg>
      );
    case "leaf":
      return (
        <svg width={size * 1.3} height={size} viewBox="0 0 26 20" fill="none">
          <path
            d="M2 10 C2 10, 8 2, 16 2 C22 2, 24 8, 24 10 C24 12, 22 18, 16 18 C8 18, 2 10, 2 10Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <line x1="2" y1="10" x2="24" y2="10" stroke={color} strokeWidth="0.5" opacity="0.4" />
        </svg>
      );
  }
}

interface FloatingParticlesProps {
  color?: string;
  className?: string;
}

export default function FloatingParticles({ color = "#C4943A", className = "" }: FloatingParticlesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: p.x, top: p.y, opacity: p.opacity }}
          animate={{
            y: [0, -18, 4, -10, 0],
            x: [0, 6, -4, 8, 0],
            rotate: [0, 15, -8, 20, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ParticleShape shape={p.shape} size={p.size} color={color} />
        </motion.div>
      ))}
    </div>
  );
}
