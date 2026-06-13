"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FloatingParticles from "./FloatingParticles";

export default function BrandStatement() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#FDFAF4" }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-px"
        style={{ backgroundColor: "#C4943A" }}
      />

      {/* Very faint floating particles — sage green for variety */}
      <FloatingParticles color="#7A9A65" className="opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase mb-10"
          style={{ color: "#C4943A" }}
        >
          A word on beauty
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif font-light leading-[1.05] mb-12"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", color: "#3A5432" }}
        >
          The Art of
          <br />
          <em>Natural Luxury.</em>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-14 h-px mb-10"
          style={{ backgroundColor: "#C4943A" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-sans font-light text-base leading-8 max-w-2xl"
          style={{ color: "#3D2B1F" }}
        >
          Founded by Baneet Chawla, Kosha Life was born from a belief that what
          you put on your skin should be as honest as what you put in your body.
          Rooted in Ayurvedic wisdom and slow beauty, every formulation is an act
          of intention — not a trend, not a shortcut.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-16 flex items-center gap-6"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" opacity={0.5}>
            <path
              d="M24 4 C24 4, 32 14, 32 24 C32 34, 24 44, 24 44 C24 44, 16 34, 16 24 C16 14, 24 4, 24 4Z"
              stroke="#7A9A65" strokeWidth="1" fill="none"
            />
            <path
              d="M4 24 C4 24, 14 16, 24 16 C34 16, 44 24, 44 24 C44 24, 34 32, 24 32 C14 32, 4 24, 4 24Z"
              stroke="#7A9A65" strokeWidth="1" fill="none"
            />
          </svg>
          <span className="font-serif italic text-sm" style={{ color: "#7A9A65" }}>
            Pure. Natural. You.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
