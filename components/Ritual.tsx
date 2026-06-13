"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    word: "Natural",
    desc: "Every ingredient earns its place. No fillers, no compromise.",
    Icon: () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2 C16 2, 26 10, 26 18 C26 26, 16 30, 16 30 C16 30, 6 26, 6 18 C6 10, 16 2, 16 2Z" stroke="#C4943A" strokeWidth="1" fill="none" />
        <path d="M16 10 C16 10, 20 14, 20 18 C20 22, 16 25, 16 25 C16 25, 12 22, 12 18 C12 14, 16 10, 16 10Z" stroke="#C4943A" strokeWidth="0.75" fill="none" opacity="0.5" />
        <line x1="16" y1="2" x2="16" y2="30" stroke="#C4943A" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    word: "Pure",
    desc: "Steam-distilled, cold-pressed, slow-made. The process is the product.",
    Icon: () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4 L19 12 L28 12 L21 17 L24 26 L16 21 L8 26 L11 17 L4 12 L13 12 Z" stroke="#C4943A" strokeWidth="1" fill="none" />
        <circle cx="16" cy="16" r="4" stroke="#C4943A" strokeWidth="0.75" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    word: "Mindful",
    desc: "Rooted in Ayurveda — the oldest conversation between humans and plants.",
    Icon: () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#C4943A" strokeWidth="1" fill="none" />
        <path d="M16 10 C16 10, 20 13, 20 16 C20 19, 18 21, 16 22 C14 21, 12 19, 12 16 C12 13, 16 10, 16 10Z" stroke="#C4943A" strokeWidth="0.75" fill="none" opacity="0.6" />
        <circle cx="16" cy="16" r="2" stroke="#C4943A" strokeWidth="0.75" fill="none" />
        <line x1="16" y1="4" x2="16" y2="10" stroke="#C4943A" strokeWidth="0.75" opacity="0.4" />
        <line x1="16" y1="22" x2="16" y2="28" stroke="#C4943A" strokeWidth="0.75" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Ritual() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="ritual"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#2C1A0E" }}
    >
      {/* Atmospheric texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(155,99,64,0.12) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(58,84,50,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-20 items-start">
          {/* Left: Headline block */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="font-sans text-[10px] tracking-[0.35em] uppercase mb-8"
              style={{ color: "#C4943A" }}
            >
              Our philosophy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif font-light leading-[0.95] mb-10"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "#F2E8D5",
              }}
            >
              From{" "}
              <em style={{ color: "#C4943A" }}>Soil</em>
              <br />
              to Soul.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="w-14 h-px mb-8"
              style={{ backgroundColor: "#C4943A" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="font-sans font-light text-base leading-8 max-w-lg"
              style={{ color: "#F2E8D5", opacity: 0.7 }}
            >
              Crafted with Nature. Rooted in Love. Every drop carries the
              intelligence of plants that have been trusted for thousands of years.
            </motion.p>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-0">
            {pillars.map((pillar, i) => {
              const { Icon } = pillar;
              return (
                <motion.div
                  key={pillar.word}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.13,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-5 py-8 border-b last:border-b-0"
                  style={{ borderColor: "rgba(196,148,58,0.15)" }}
                >
                  <Icon />
                  <div>
                    <h3
                      className="font-serif text-xl font-light mb-1.5"
                      style={{ color: "#F2E8D5" }}
                    >
                      {pillar.word}
                    </h3>
                    <p
                      className="font-sans text-sm font-light leading-6 max-w-xs"
                      style={{ color: "#F2E8D5", opacity: 0.55 }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom large italic quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif italic mt-20 text-right"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "#C4943A",
            opacity: 0.5,
          }}
        >
          &ldquo;Skincare with Soul&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
