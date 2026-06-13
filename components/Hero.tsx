"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import FloatingParticles from "./FloatingParticles";

const WHATSAPP_URL =
  "https://wa.me/919461911119?text=Hi%20Kosha%20Life!%20I%27d%20like%20to%20order%20Rose%20Ras.";

const headlineWords = ["Bloom", "with", "Intent."];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bottleY    = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY       = useTransform(scrollYProgress, [0, 0.55], [0, -30]);
  const videoScale  = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      id="hero"
    >
      {/* ── Video background ── */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: videoScale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.38) saturate(0.85)" }}
        >
          <source src="/rose-ras-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Dark gradient layer ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(44,26,14,0.72) 0%, rgba(44,26,14,0.45) 60%, rgba(58,84,50,0.25) 100%)",
        }}
      />

      {/* ── Floating botanical particles ── */}
      <FloatingParticles color="#C4943A" className="z-[2]" />

      {/* ── Animated corner line-art accents ── */}
      <svg
        className="absolute top-24 right-8 z-[2] opacity-20"
        width="80" height="80" viewBox="0 0 80 80" fill="none"
      >
        <motion.rect
          x="1" y="1" width="78" height="78"
          stroke="#C4943A" strokeWidth="0.75"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 1.5, ease: "easeInOut" }}
        />
        <motion.rect
          x="10" y="10" width="60" height="60"
          stroke="#C4943A" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 1.9, ease: "easeInOut" }}
        />
      </svg>
      <svg
        className="absolute bottom-20 left-8 z-[2] opacity-15"
        width="60" height="60" viewBox="0 0 60 60" fill="none"
      >
        <motion.circle
          cx="30" cy="30" r="28"
          stroke="#C4943A" strokeWidth="0.75"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center w-full">

          {/* Left: Text */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="flex flex-col gap-7 lg:pr-8"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-sans text-[11px] tracking-[0.3em] uppercase"
              style={{ color: "#C4943A" }}
            >
              Ayurvedic Luxury Skincare
            </motion.p>

            {/* Headline — word-by-word stagger */}
            <h1
              className="font-serif font-light leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.35 + i * 0.16,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block mr-[0.18em]"
                  style={{ color: word === "Intent." ? "#C4943A" : "#F2E8D5" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
              className="font-serif italic font-light text-xl leading-relaxed"
              style={{ color: "#F2E8D5", opacity: 0.75 }}
            >
              Ayurvedic rituals. Modern luxury.
            </motion.p>

            {/* Animated gold divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
              className="w-14 h-px"
              style={{ backgroundColor: "#C4943A" }}
            />

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 font-sans text-xs tracking-[0.18em] uppercase transition-all duration-250"
                style={{ backgroundColor: "#C4943A", color: "#2C1A0E" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#D4A84A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C4943A"; }}
              >
                Shop via WhatsApp
              </a>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 px-7 py-3.5 border font-sans text-xs tracking-[0.18em] uppercase transition-all duration-250 hover:bg-white/5"
                style={{ borderColor: "rgba(242,232,213,0.3)", color: "#F2E8D5" }}
              >
                Explore
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Product image with parallax */}
          <div className="flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
              style={{ y: bottleY }}
              className="relative w-56 sm:w-72 lg:w-80 xl:w-96"
            >
              <div
                className="absolute inset-0 blur-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 60%, rgba(196,148,58,0.2) 0%, transparent 65%)",
                  transform: "scale(1.2)",
                }}
              />
              <Image
                src="/rose-ras-dark.jpg"
                alt="Rose Ras — Kosha Life"
                width={480}
                height={640}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase" style={{ color: "#C4943A" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ backgroundColor: "#C4943A", opacity: 0.6 }}
        />
      </motion.div>
    </section>
  );
}
